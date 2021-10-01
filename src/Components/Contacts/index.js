import React, { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Lance Harpur",
      phone_number: "4527243739",
    },
    {
      fullname: "Melicent Lynas",
      phone_number: "8152229462",
    },
    {
      fullname: "Sukey Aberdeen",
      phone_number: "8729191366",
    },
    {
      fullname: "Bianka Ditchett",
      phone_number: "4804856208",
    },
    {
      fullname: "Zulema Trumble",
      phone_number: "3869850022",
    },
    {
      fullname: "Reuven Dabrowski",
      phone_number: "8121090982",
    },
    {
      fullname: "Cynthy Walstow",
      phone_number: "3324248068",
    },
    {
      fullname: "Marchall Caston",
      phone_number: "5337336410",
    },
    {
      fullname: "Erinn Corkhill",
      phone_number: "3993063580",
    },
    {
      fullname: "Marty Scrase",
      phone_number: "5281300317",
    },
    {
      fullname: "Webb Crutchfield",
      phone_number: "4363661083",
    },
    {
      fullname: "Orly Graysmark",
      phone_number: "2504609246",
    },
    {
      fullname: "Brandi Ambrosetti",
      phone_number: "5634823286",
    },
    {
      fullname: "Zachery Channing",
      phone_number: "2111125976",
    },
    {
      fullname: "Merl Gilstoun",
      phone_number: "3023305425",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
