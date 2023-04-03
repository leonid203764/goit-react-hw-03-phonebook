import { Component } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from 'nanoid';
import css from '../App/App.module.css';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Section from 'components/Section/Section';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }

  addNewContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameAdded = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isNumberAdded = contacts.some(contact => contact.number === number);

    if (isNameAdded) {
      Report.failure('Oh...', `${name} is already is contacts.`, 'OK');
      return false;
    } else if (isNumberAdded) {
      Report.failure('Oh...', `${number} is already is contacts.`, 'OK');
      return false;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    Report.success('Hooray!', `${name} is added to the phonebook.`, 'OK');
    return true;
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = idItem => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idItem),
    }));
  };

  getFilteredBooks = () => {
    const { filter, contacts } = this.state;

    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const { addNewContact, onChangeFilter, deleteContact } = this;
    const visibleContacts = this.getFilteredBooks();
    const isContacts = Boolean(contacts.length);
    return (
      <div className={css.container}>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={addNewContact} />
        </Section>
        <Section title={'Contacts'}>
          {isContacts > 1 && (
            <Filter value={filter} onChange={onChangeFilter} />
          )}

          {isContacts && (
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={deleteContact}
            />
          )}
          {!isContacts && (
            <p className={css.text}>
              Your phonebook is empty. Please add contact.
            </p>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
