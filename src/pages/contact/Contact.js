import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import ContactsCode from "../../components/contacts-code/ContactsCode";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // to show success/error message

  const submitForm = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setStatus({ success: false, message: "Please fill all fields." });
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message,
    };

    emailjs
      .send(
        "service_solt5ll",
        "template_x0wgbi2",
        templateParams,
        "1UTXuWE_ZQ3rVsNhv"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus({ success: true, message: "Message sent successfully!" });
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus({
            success: false,
            message: "Failed to send message. Please try again later.",
          });
        }
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Reach Out Via Socials</h3>
        <ContactsCode />
      </div>
      <div className={styles.container__right}>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {status && (
          <p
            style={{
              marginTop: "1rem",
              color: status.success ? "green" : "red",
              fontWeight: "bold",
            }}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
