import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from '../css/Container.module.css';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));
    if (contactsFromLS !== null && contactsFromLS.length !== 0) {
      setContacts(contactsFromLS);
    }
  }, []);

  useEffect(() => {
    console.log(contacts);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const updateFilter = evt => {
    setFilter(evt.target.value);
  };

  const addContact = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      const number = form.elements.number.value;
      const id = nanoid();
      setContacts(contacts.concat({ id: id, name: name, number: number }));
    }
    form.reset();
  };

  const deleteContact = evt => {
    const id = evt.target.parentNode.getAttribute('for');
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Phonebook addContact={addContact} />
      <h2>Contacts</h2>
      <Filter updateFilter={updateFilter} />
      <ContactList
        deleteContact={deleteContact}
        contacts={contacts}
        filter={filter}
      />
    </div>
  );
};
