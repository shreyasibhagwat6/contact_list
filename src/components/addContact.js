import React, { useState } from "react";

function AddContact ({ onCreate }) {
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
        onCreate({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        });
        console.log(typeof onCreate)
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
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
                <button>Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact;