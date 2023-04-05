import { useMemo } from 'react';
import PropTypes from 'prop-types';
import css from '../css/ContactList.module.css';

export const ContactList = ({ deleteContact, contacts, filter }) => {
  const filterContacts = (contacts, filter) => {
    if (filter) {
      filter = filter.toLowerCase();
      return contacts.filter(contact => {
        const contactName = contact.name.toLowerCase();
        return contactName.includes(filter);
      });
    } else return contacts;
  };

  const filteredContacts = useMemo(
    () => filterContacts(contacts, filter),
    [contacts, filter]
  );

  return (
    <ul className={css.contacts_container}>
      {filteredContacts.map(contact => (
        <li className={css.contacts_item} htmlFor={contact.id} key={contact.id}>
          <p>{contact.name}:</p>
          <p>{contact.number}</p>
          <button
            className={css.contacts_delete_btn}
            type="button"
            onClick={deleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
