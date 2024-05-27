import React, { useState } from "react";
import EditContact from "./EditContact";

function Contact ({ contact, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(contact.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, firstName, lastName, phoneNumber, address) => {
        setShowEdit(false)
        console.log(id)
        console.log(firstName)
        onEdit(id, firstName, lastName, phoneNumber, address)
    }

    console.log(contact)

    let content = (
        <div>
            <h4>{contact.firstName}</h4>
            <h4>{contact.lastName}</h4>
            <h4>{contact.phoneNumber}</h4>
            <h3>{contact.address}</h3>
        </div>
    )

    if(showEdit) {
        content = <EditContact contact={contact} onEdit={onEdit} onSubmit={handleSubmit}/>
    }
    

    return(
        <div>
            <div>
                {content}
            </div>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Contact;