import React, { useState } from "react";
import EditContact from "./EditContact";

function Contact ({ contact, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(contact.id)
    }

    const handleEditClick = (id) => {
        onEdit(contact.id)
        setShowEdit(!showEdit)
    }

    console.log(contact)

    let content = (
        <div>
            <h4>{contact.firstName}</h4>
            <h4>{contact.lastName}</h4>
            <h4>{contact.phoneNumber}</h4>
        </div>
    )

    if(showEdit) {
        content = <EditContact contact={contact} onEdit={onEdit}/>
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