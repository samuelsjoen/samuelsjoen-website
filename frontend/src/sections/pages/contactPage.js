import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    setStatusMessage('');
    event.preventDefault();
    emailjs
      .sendForm('service_ltc0nl6', 'template_zjdbhfb', event.target, 'jyNHSUNTCLNj3cU7K')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatusMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log('FAILED...', error);
          setStatusMessage('Failed to send message. Please try again.');
        }
      );
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

      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default ContactPage;
