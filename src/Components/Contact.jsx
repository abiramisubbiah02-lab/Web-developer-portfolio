import React, { useState } from "react";
import Cookies from "js-cookie";
import { MdEmail, MdBusinessCenter } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub, FaLinkedinIn, FaBehanceSquare } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    let err = {};
    if (!form.name) err.name = "Name required";
    if (!form.email) err.email = "Email required";
    if (!form.message) err.message = "Message required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      Cookies.set("contactForm", JSON.stringify(form), { expires: 7 });
      alert("Message sent");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="contact-section" id="Con">
      <Container>
        <Row className="align-items-center">

          {/* LEFT */}
          <Col md={5} className="left">
            <h2>Contact Me</h2>
            <p className="subtitle">
              Let’s build something meaningful together.
            </p>

            <hr />

            <p><MdEmail /> Email: abiramisubbiah02@gmail.com</p>
            <p><IoLocationSharp /> Location: Coimbatore, Tamil Nadu</p>
            <p><MdBusinessCenter /> Freelance: Open to work</p>

            <hr />

            <h6>Connect with me</h6>
            <div className="icons">
             <span className='git'>
                       <FaGithub />
                       </span>
                       <span >
                         <a className='git' href="https://www.linkedin.com/in/abirami-subbiah-uiux" target='blank'> <FaLinkedinIn /></a>
                     
                      </span>
                          
                          
                             <a className='git' href="https://www.behance.net/abiramisubbiah" target='blank'>
                             <FaBehanceSquare /></a>
            </div>
          </Col>

          {/* DIVIDER */}
          <Col md={1} className="divider-col">
            <div className="divider"></div>
          </Col>

          {/* RIGHT */}
          <Col md={6}>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
              {errors.name && <small className="error">{errors.name}</small>}

              <input name="email" placeholder="Your Email" value={form.email} onChange={handleChange} />
              {errors.email && <small className="error">{errors.email}</small>}

              <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} />
              {errors.message && <small className="error">{errors.message}</small>}

              <button>Send Message</button>
            </form>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Contact;
