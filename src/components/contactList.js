import React, { useEffect, useState } from "react";
import Contact from "./Contact";

function ContactList ({ contact, onDelete }) {

  const renderedContacts = contact.map((contact)=> {
    return(
      <Contact contact={contact} onDelete={onDelete}/>
    )
  })

return (
  <div>
    {renderedContacts}
    {console.log(typeof contact)}
  </div>
)}

export default ContactList;