import Reac, { useState } from "react";

function Contact ({ contact, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(contact.id)
    }

    const handleEditClick = () => {
        onEdit(contact.id)
        setShowEdit(!showEdit)
    }

    let contentFirstName = <h4>{contact.firstName}</h4>
    let contentLastName = <h4>{contact.lastName}</h4>
    let contentPhoneNumber = <h4>{contact.phoneNumber}</h4>

    // if (showEdit) {
    //     content = <EditTodo onSubmit={handleSubmit} todo={todo} />
    // }

    console.log(contact)

    return(
        <div>
            <div>
                {contact.id}
                {contentFirstName}
                {contentLastName}
            </div>
            <div>
                {contentPhoneNumber}
            </div>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default Contact;