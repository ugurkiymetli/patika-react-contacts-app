import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
const initialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  //formun ilk boş inputlarını oluşturduk

  useEffect(() => {
    //form inputlarını temizledik.
    setForm(initialFormValues);
  }, [contacts]);

  //form state
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    console.log("Form Component Mounted!");
  }, []);

  // forma veri girdiğinde stateler güncelleniyor.
  const onFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //veriyi contacts'e ekliyoruz
  //eğer boş ise false dönüyor.
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      console.log("name or phone number cannot be empty.");
      return false;
    }
    //önceki datayı tutup üzerine ekledik.
    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="Name"
          value={form.fullname}
          onChange={onFormChange}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onFormChange}
        />
      </div>
      <div>
        <button>Add Contact</button>
      </div>
    </form>
  );
}
//proptypes tanımları
Form.propTypes = {
  fullname: PropTypes.string,
  phone_number: PropTypes.number,
};

export default Form;
