import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div style={{
      padding: '40px', 
      backgroundColor: '#FCF7F7', // lighter background
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
        Termeni și Condiții
      </h1>

      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Bine ați venit la <strong>Tutungerie</strong>. Utilizând serviciile noastre, sunteți de acord cu următorii
        termeni și condiții. Te rugăm să îi citești cu atenție înainte de a plasa o comandă.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        1. Modalități de plasare a comenzilor
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Comenzile pot fi efectuate exclusiv prin:
      </p>
      <ul style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginLeft: '20px',
      }}>
        <li>Telefonic, apelând numărul <strong>0785610156</strong>.</li>
        <li>Prin mesaj SMS sau WhatsApp la numărul <strong>0785610156</strong>.</li>
        <li>Prin e-mail la <a href="mailto:contact.tutungerie@gmail.com" style={{ color: '#D32F2F', fontWeight: 'bold' }}>contact.tutungerie@gmail.com</a>.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        2. Disponibilitatea produselor
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Produsele afișate pe site sunt disponibile în limita stocului. Vom confirma disponibilitatea în momentul plasării
        comenzii telefonice, prin mesaj sau prin e-mail.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        3. Livrarea comenzilor
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Livrarea se face prin curier rapid, iar costurile vor fi comunicate în momentul plasării comenzii. Timpul estimativ
        de livrare este de 4 - 7 zile lucrătoare.
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

export default TermsAndConditions;
