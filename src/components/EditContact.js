import React, { useState } from "react";

function EditContact ({ contact, onSubmit }) {

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

    // const handleSubmit = (event) => {
    //     event.preventDefault.default();
    //     onSumbit({
    //         firstName: firstName,
    //         lastName: lastName,
    //         phoneNumber: phoneNumber 
    // })
    //     setFirstName('');
    //     setLastName('');
    //     setPhoneNumber('');
    // }

    console.log(contact)

    return (
        <div>
            <form>
                <label>First Name</label>
                <input value={contact.firstName} onChange={handleNameChange}></input>
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