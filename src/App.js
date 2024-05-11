import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactList from "./components/contactList";
import AddContact from "./components/addContact";

function App () {
  const[contact, setContact] = useState('')

  const getContact = async () => {
    const response = await axios.get('http://localhost:3001/')
    setContact(response.data)
    console.log(contact)
  };

  useEffect(()=>{
    getContact();
  }, []);
  
  const createContact = async (firstName, lastName, phoneNumber) => {
    const response = await axios.post('http://localhost:3001/', {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber
    });
    const newContact = [
      ...contact,
      response.data
    ]

    setContact(newContact);
    
  }

  return (
  <div>
    <AddContact onCreate={createContact} />
    <ContactList />
  </div>
 )
}

export default App;