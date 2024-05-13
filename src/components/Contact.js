import React from "react";

function Contact ({ contact, onDelete }) {
    
    const handleDeleteClick = () => {
        onDelete(contact.id)
    }

    return(
        <div>
            <div>
                {contact.id}
                {contact.firstName}
                {contact.lastName}
            </div>
            <div>
                {contact.phoneNumber}
            </div>
            <button>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Contact;