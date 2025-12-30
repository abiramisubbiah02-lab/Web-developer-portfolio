import React from 'react'

const Fo = () => {
  return (
    <div>
      <div className="contact-section">
  <div className="contact-container">

    {/* LEFT */}
    <div className="contact-left">
      <h2>Contact Me</h2>
      <p className="subtitle">
        Let’s build something meaningful together.
      </p>

      <hr />

      <p>Email: yourname@example.com</p>
      <p>Location: Coimbatore, Tamil Nadu</p>
      <p>Freelance: Open to work</p>

      <hr />

      <h6>Connect with me</h6>
      <div className="socials">
        <span>Git</span>
        <span>in</span>
        <span>Be</span>
      </div>
    </div>

    {/* DIVIDER */}
    <div className="divider"></div>

    {/* RIGHT */}
    <div className="contact-right">
      <input placeholder="Your Name" />
      <input placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button>Send Message</button>
    </div>

  </div>
</div>

    </div>
  )
}

export default Fo
