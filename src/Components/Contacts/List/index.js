import React, { useState } from "react";
//contacts = { fullname: 'string', phone_number: number }
function List({ contacts }) {
  const [filterText, setfilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <h2>Telefon Rehberi</h2>
      <input
        placeholder="Rehberde Ara"
        value={filterText}
        onChange={(e) => setfilterText(e.target.value)}
      />
      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>
            {contact.fullname} -
            <small>
              <small> {contact.phone_number}</small>
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
