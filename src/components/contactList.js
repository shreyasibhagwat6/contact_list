import React, { useEffect, useState } from "react";
import Contact from "./Contact";

function ContactList ({ contact, onDelete, onEdit }) {

  const renderedContacts = contact.map((contact)=> {
    return(
      <Contact key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit}/>
    )
  })

  console.log(contact)

return (
  <div>
    {renderedContacts}
  </div>
)}

export default ContactList;