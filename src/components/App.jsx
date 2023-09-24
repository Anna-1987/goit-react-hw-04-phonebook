import {ContactsForm} from './ContactsForm/ContactsForm';
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import shortid from "shortid";
import { useState, useEffect} from "react";

export function App () {
   const [contacts, setContacts] = useState( JSON.parse(localStorage.getItem('contacts')) ?? []);
   const [filter, setFilter] = useState('');

 useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  const addContact = (name, number) => {
    const contact = {
      id:shortid.generate(),
      name,
      number,
    };
   
    contacts.some(
      i =>
        (i.name === contact.name.toLowerCase() &&
          i.number === contact.number) ||
        i.number === contact.number
    )
      ? alert(`${name} or ${number} is already in contacts`)
      : setContacts([contact, ...contacts]);
  };

 const changeFilterInput = e => {
    setFilter(e.target.value);
  };

  const findContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
    setFilter('');
  };

    return (
      <div
        style={{
          textAlign:'center',
          fontSize: '16px',
          color: '#010101'
          
        }}
      >
         <h1>Phonebook</h1>
         <ContactsForm onSubmit={addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} changeFilterInput={changeFilterInput} />
        <ContactList 
        contacts={findContacts()}
        deleteContact={deleteContact}
        /> 
    
      </div>
    );
  }
 


