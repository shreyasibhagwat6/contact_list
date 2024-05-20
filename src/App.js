import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

function App () {
  const[contact, setContact] = useState([])

  const getContact = async () => {
    const response = await axios.get('http://localhost:3001/')
    setContact(response.data)
    console.log(contact)
  };

  useEffect(()=>{
    getContact();
  }, []);
  
  const createContact = async ({ firstName, lastName, phoneNumber }) => {
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

  const deleteContact = async (id) => {
    const response = await axios.delete(`http://localhost:3001/${id}`);

    const updatedContact = contact.filter((contact)=> {
      return contact.id !== id
    })
    
    setContact(updatedContact);
  }

  const editContact = async ({ id, newContact }) => {
    const response = await axios.put(`http://localhost:3001/${id}`,
      {
        firstName: newContact.firstName,
        lastName: newContact.lastName,
        phoneNumber: newContact.phoneNumber
      });

      const updatedContact = contact.map((contact) => {
        if (contact.id === id) {
          return {...contact, ...response.data}
        }
        return contact;
      })

      setContact(updatedContact);
  }

  return (
  <div>
    <AddContact onCreate={createContact} />
    <ContactList contact={contact} onDelete={deleteContact} onEdit={editContact}/>
  </div>
 )
}

export default App;