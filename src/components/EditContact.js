import React, { useState } from "react";

function EditContact ({ contact, onSubmit }) {

    const[firstName, setFirstName] = useState(contact.firstName);
    const[lastName, setLastName] = useState(contact.lastName);
    const[phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
    const[address, setAddress] = useState(contact.address);

    const handleNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleChange = (event) => {
        setLastName(event.target.value);
    }

    const handleNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contact.id)
        onSubmit(contact.id, firstName, lastName, phoneNumber, address)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input value={firstName} onChange={handleNameChange}></input>
                <label>Last Name</label>
                <input value={lastName} onChange={handleChange}></input>
                <label>Phone Number</label>
                <input value={phoneNumber} onChange={handleNumberChange}></input>
                <label>Address</label>
                <input value={address} onChange={handleAddressChange}></input>
                <button>Save</button>
            </form>
        </div>
    )
}

export default EditContact;