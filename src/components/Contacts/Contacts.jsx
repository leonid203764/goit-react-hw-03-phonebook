import PropTypes from 'prop-types';
import { List, Item, Text, Button } from './Contacts.style';

export const Contacts = ({ contacts, receiveID }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button
              onClick={() => {
                receiveID(id);
              }}
            >
              Remove
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  receiveID: PropTypes.func.isRequired,
};

// import React, { Component } from 'react';

// class Contacts extends Component {
//   render() {
//     return (
//       <ul>
//         {this.props.contacts.map(({ id, name, number }) => {
//           return (
//             <li key={id}>
//               <p>
//                 {name}: {number}
//               </p>
//               <button
//                 onClick={() => {
//                   console.log(id);
//                   this.props.receiveID(id);
//                 }}
//               >
//                 Remove
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

// export default Contacts;
