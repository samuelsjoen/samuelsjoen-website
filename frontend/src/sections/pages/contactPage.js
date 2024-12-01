import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = {
    
  };

  return (
    <div className='contactPage'>
      <h1>Contact me</h1>
      <h2>Let's get this conversation started. Tell me a bit about yourself
        and any inquiries you might have. I'll get in touch as soon as I can!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
