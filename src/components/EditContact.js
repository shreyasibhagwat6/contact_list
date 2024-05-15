import React, { useState } from "react";

function EditContact ({ onSubmit }) {
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
        event.preventDefault.default();
        onSumbit({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber 
    })
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input value={firstName} placeholder="Enter first name" onChange={handleNameChange}></input>
                <label>Last Name</label>
                <input value={lastName} placeholder="Enter last name" onChange={handleChange}></input>
                <label>Phone Number</label>
                <input value={phoneNumber} placeholder="Enter phone number" onChange={handleNumberChange}></input>
                <button>Save</button>
            </form>
        </div>
    )
}