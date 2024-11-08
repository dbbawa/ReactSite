import React from 'react';
import { useState } from 'react';
import './ContactForm.css';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault(); 
    setResult("Sending..."); 
    const formData = new FormData(event.target);

    formData.append("access_key", "2bbc9d1f-67eb-417c-85e1-22dc6d376b41");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json(); 

      if (data.success) {
        setResult("Form Submitted!"); 
        event.target.reset(); 
      } else {
        setResult(data.message); 
        console.error("Error:", data); 
      }
    } catch (error) {
      setResult("Error. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="contact-container">
      <form onSubmit={onSubmit}>
      <h2>Contact Form</h2>
        <p>
        <label for="name">Name:</label>
        <input type="text" name="name" placeholder="Full Name" required />
        </p>
        <p>
        <label for="email">Email:</label>
        <input type="email" name="email" placeholder="Email Address" required />
        </p>
        <p>
        <label for="message">Message:</label>
        <textarea name="message" placeholder="Message" rows="5" required></textarea>
        </p>
        <p>
        <button type="submit">Submit Form</button>
        </p>
        <span>{result}</span> 
      </form>
    </div>
  );
}
