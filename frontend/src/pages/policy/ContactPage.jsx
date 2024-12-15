import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#FCF7F7',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
        Contactează-ne
      </h1>

      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Dacă ai întrebări sau nevoie de asistență, nu ezita să ne contactezi! Suntem aici pentru a te ajuta cu orice nelămuriri.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        Modalități de contact
      </h2>

      <div style={{
        display: 'flex', 
        flexDirection: 'column', 
        gap: '20px', 
        marginTop: '20px'
      }}>
        {/* Contact via WhatsApp */}
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem', color: '#555' }}>
          <FaWhatsapp style={{ fontSize: '2rem', marginRight: '15px', color: '#25D366' }} />
          <a 
            href="https://wa.me/40785610156" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
              color: '#25D366',
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.color = '#128C7E'}
            onMouseOut={(e) => e.target.style.color = '#25D366'}
          >
            WhatsApp Chat
          </a>
        </div>

        {/* Contact via Email */}
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem', color: '#555' }}>
          <FaEnvelope style={{ fontSize: '2rem', marginRight: '15px', color: '#D32F2F' }} />
          <a 
            href="mailto:mihaiandrei1304@gmail.com" 
            style={{
              color: '#D32F2F', 
              fontWeight: 'bold',
              textDecoration: 'none',
              transition: 'color 0.3s',
            }}
            onMouseOver={(e) => e.target.style.color = '#C2185B'}
            onMouseOut={(e) => e.target.style.color = '#D32F2F'}
          >
            contact.tutungerie@gmail.com
          </a>
        </div>
      </div>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        Adresa noastră
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Poți să ne găsești la următoarea adresă:
      </p>

      <p style={{
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
        lineHeight: '1.6',
      }}>
        <span style={{ display: 'block', marginBottom: '10px' }}>
          <strong>Strada:</strong> Opera Comica pentru Copii, 16, Calea Giulești
        </span>
        <span style={{ display: 'block', marginBottom: '10px' }}>
          <strong>Oraș:</strong> Giulești, București
        </span>
        <span style={{ display: 'block', marginBottom: '10px' }}>
          <strong>Cod Poștal:</strong> 060276
        </span>
      </p>

     

      <div style={{ marginTop: '40px' }}>
        <Link
          to="/"
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#D32F2F',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
