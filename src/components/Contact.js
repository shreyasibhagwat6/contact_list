import React from "react";

function Contact ({ contact }) {
    
    return(
        <div>
            <div>
                {contact.firstName}
                {contact.lastName}
            </div>
            <div>
                {contact.phoneNumber}
            </div>
        </div>
    )
}

export default Contact;