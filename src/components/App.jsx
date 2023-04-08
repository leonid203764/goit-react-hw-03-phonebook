import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { MainContainer, Title } from './App.style';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParse = JSON.parse(contacts);

    if (contactsParse) {
      this.setState({ contacts: contactsParse });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  reviseExistName = person => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === person.toLowerCase()
    );
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.reviseExistName(name)) {
      return alert(`Sorry, but ${contact.name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  removeContact = id => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const filterContacts = this.filterContacts();

    return (
      <MainContainer>
        <Title>Phonebook</Title>
        <Phonebook onSubmitAccept={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={filterContacts} receiveID={this.removeContact} />
      </MainContainer>
    );
  }
}

export default App;
