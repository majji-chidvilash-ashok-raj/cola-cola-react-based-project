import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <main className='main'>
      <section className='contact'>
        <div className='contact-heading'>
          <h1>Contact Us</h1>
          <p>
            We're here to help! Reach out with any questions, feedback, or inquiries. Our team is dedicated to providing prompt and helpful assistance.
          </p>
        </div>
        <form className='contact-form'>
          <label>Name</label>
          <input type='text' placeholder='Your Name' />
          
          <label>Email</label>
          <input type='email' placeholder='Your Email' />
          
          <label>Message</label>
          <textarea placeholder='Message'></textarea>
          
          <button type='submit'>Submit</button>
        </form>
      </section>

      <section className='contact-info'>
        <h2>Contact Information</h2>
        <p>If you have any questions, feel free to reach out to us at:</p>
        <p>Email: support@cola-cola.com</p>
        <p>Phone: 1-800-123-4567</p>
      </section>

      <section className='connect'>
        <h2>Connect with Us</h2>
        <p>Follow us on our social media channels:</p>
        <ul>
          <li><a href='https://www.linkedin.com/in/chidvilash-ashok-raj-majji-988502324/'>LinkedIn</a></li>
          <li><a href='https://github.com/majji-chidvilash-ashok-raj'>Github</a></li>
        </ul>
      </section>
    </main>
  );
};

export default Contact;
