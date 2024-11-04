import React from 'react';
import './Contact.css'; 
import '../styles.css';
import qr from '../images/qr.png' 

const Contact = () => {
  return (
    <main>
      <div className="content-wrapper">
        <form
          id="left-box"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="2bbc9d1f-67eb-417c-85e1-22dc6d376b41"
          />
          <h2>Contact Form</h2>
          <p>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              required
            />
          </p>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </p>
          <p>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </p>
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <input
            type="hidden"
            name="subject"
            value="Contact Form Submission"
          />
          <input type="hidden" name="from_name" value="SkiMastery" />
          <p>
            <button type="submit">Submit</button>
          </p>
          <p id="result"></p>
        </form>
        <div className="right-section">
          <div className="right-box">
            <h2>Why Reach Out?</h2>
            <p>
              Whether you're a seasoned skier or just starting out, we’re here to help you navigate the exhilarating world of skiing! Our team is passionate about sharing expert insights, tips, and resources that cover everything from the basics of skiing techniques to the best destinations for your next adventure. If you have questions about gear, lessons, or the best slopes for your skill level, don’t hesitate to reach out. We're dedicated to ensuring you have the best experience possible on the snow, and we're excited to assist you on your skiing journey! Our newsletter is a great way to keep up to date with all relevant skiing information.
            </p>
          </div>
          <div className="qr-box">
            <a href="">
              <div className="qr-img">
                <img src={qr} alt="QR Code" />
              </div>
              <div className="qr-title">
                <p>Join Our Newsletter!</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;