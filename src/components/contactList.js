import React, { useEffect, useState } from "react";
import Contact from "./Contact";

function ContactList ({ contact }) {

  const renderedContacts = contact.map((contact)=> {
    return(
      <Contact contact={contact} />
    )
  })

return (
  <div>
    {renderedContacts}
    {console.log(typeof contact)}
  </div>
)}

export default ContactList;