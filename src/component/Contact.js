import React from 'react';

const Contacts = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Contact Us</h2>
      <p style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '800px', margin: 'auto' }}>
        If you have any questions, comments, or feedback, we'd love to hear from you!
        Please fill out the form below, and we'll get back to you as soon as possible.
      </p>

      <form style={{ maxWidth: '400px', margin: 'auto', textAlign: 'left' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: 'black', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contacts;
