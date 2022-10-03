import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
// get unique id for each contact
let date = new Date
let idNumber = date.getTime();

function App() {
  // set local storage key
  const LOCAL_STORAGE_KEY = "contacts";
  // make contacts into an empty array
  const [contacts, setContacts] = useState([]);
  // give each contact a unique id
  const addContactHandler = (contact)=> {
    // {...contact} why??
    setContacts([...contacts, {id: {idNumber}, ...contact}]);
  };
  // delete contact using unique id
  const removeContactHandler = (id) => {
    // filter thru the contacts array and return all contacts that do not match the id that was deleted
    const newContactList = contacts.filter((contact)=> {
      return contact.id !== id;
    })
    // update new contact list using state
    setContacts(newContactList)
  }
  // wtf is this??
  useEffect(()=> {
    // get contats from localstorage and parse the JSON data
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // ??
    if(retrieveContacts) setContacts(retrieveContacts);
  }, []);
  // ???
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])
  // render main container
  return (
    // give unique id when add button is clicked
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  )
}

export default App;
