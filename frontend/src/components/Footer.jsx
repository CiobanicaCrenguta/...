import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Importing WhatsApp icon from react-icons

const Footer = () => {
  return (
    <>
      <footer className='section__container footer__container'>
        <div className='footer__col'>
          <h4>CONTACT INFO</h4>
          <div className='contact__details'>
            {/* Phone number (non-clickable) */}
            <span className="contact__item">
              <i className="ri-phone-fill"></i> 
              <span>0785610156</span>
            </span>
            {/* Email address */}
            <span className="contact__item">
              <i className="ri-mail-fill"></i> 
              <a href="mailto:mihaiandrei1304@gmail.com">contact.tutungerie@gmail.com</a>
            </span>
            {/* WhatsApp */}
            <span className="contact__item">
              <FaWhatsapp className="whatsapp-icon" />
              <a href="https://wa.me/40785610156" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
            </span>
          </div>
        </div>
        
        <div className='footer__col'>
          <h4>LEGAL</h4>
          <ul className='legal__list'>
            <li>
              <a href="/politica-confidentialitate">Politica de confidențialitate</a> {/* Link to Privacy Policy */}
            </li>
            <li>
              <a href="/termeni-si-conditii">Termeni și condiții</a>
            </li>
            <li>
              <a href="/politica-cookies">Politica de cookies</a>
            </li>
          </ul>
        </div>

        <div className='footer__col'>
          <h4>INFORMAȚII CLIENȚI</h4>
          <ul className='customer__info'>
            <li>
              <a href="/politica-retur">Politica de retur</a>
            </li>
          </ul>
        </div>
      </footer>
   
      <div className='footer__bar'> 
        © Toate drepturile rezervate.
      </div>
    </>
  );
};

export default Footer;
