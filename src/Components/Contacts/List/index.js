import React from "react";
//contacts = { fullname: 'string', phone_number: number }
function List({ contacts }) {
  return (
    <div>
      <h2>Telefon Rehberi</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.fullname} - {contact.phone_number}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
