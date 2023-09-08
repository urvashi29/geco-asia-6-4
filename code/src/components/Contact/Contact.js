import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "alina",
    age: 20,
    contact: {
      contact_email_address: "admin@gmail.com",
      contact_number: 99999999,
    },
  });

  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/about");
  }, 2000); //after 2 seconds

  return (
    <div style={{ textAlign: "center" }}>
      Contact Us:
      <p>Email Address: {contactDetails.contact.contact_email_address}</p>
      <p>Contact Number:{contactDetails.contact.contact_number}</p>
    </div>
  );
};

export default Contact;
