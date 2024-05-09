import React from "react";

function AddContact () {
    return (
        <div>
            <form>
                <label>First Name: </label>
                <input placeholder="Enter first name"></input>
                <label>Last Name: </label>
                <input placeholder="Enter last name"></input>
                <label>Phone Number: </label>
                <input placeholder="Enter phone number"></input>
                <button>Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact;