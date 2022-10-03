import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props)=> {
    const deleteContactHandler = (id) => {
      // ??
      props.getContactId(id);
    }
  const renderContactList = props.contacts.map((contact)=> {
    // using the contact props, render a card for each contact with a unique id stored in key
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
    )
  })
  return (
    <div className="ui celled list">
      {renderContactList}
    </div>
  )
}

export default ContactList