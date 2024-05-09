import React, { useEffect, useState } from "react";
import ContactList from "./components/contactList";
import AddContact from "./components/addContact";

function App () {
 return (
  <div>
    <AddContact />
    <ContactList />
  </div>
 )
}

export default App;