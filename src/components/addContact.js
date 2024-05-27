import React, { useState } from "react";

function AddContact ({ onCreate }) {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[address, setAddress] = useState('');

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
        onCreate({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            address: address
        });
       
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setAddress('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name: </label>
                <input value={firstName} onChange={handleNameChange} placeholder="Enter first name"></input>
                <label>Last Name: </label>
                <input value={lastName} onChange={handleChange} placeholder="Enter last name"></input>
                <label>Phone Number: </label>
                <input value={phoneNumber} onChange={handleNumberChange} placeholder="Enter phone number"></input>
                <label>Address: </label>
                <input value={address} onChange={handleAddressChange} placeholder="Enter address"></input>
                <button>Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact;