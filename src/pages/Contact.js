import React from 'react';
import './Contact.css'; 
import '../styles.css';
import qr from '../images/qr.png' 
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <main className="contact-main">
      <div className="content-wrapper-main">
        <ContactForm />
        <div className="reach-out">
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