import React, { useState } from "react";

function EditContact ({ contact, onSubmit, onEdit }) {

    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');

    const handleNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleChange = (event) => {
        setLastName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onEdit(contact.id, firstName, lastName, phoneNumber);
    }

    console.log(contact)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input onChange={handleNameChange}></input>
                <label>Last Name</label>
                <input value={contact.lastName} onChange={handleChange}></input>
                <label>Phone Number</label>
                <input value={contact.phoneNumber} onChange={handleNumberChange}></input>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditContact;