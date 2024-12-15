import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#F9F9F9', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>
        Politica de Confidențialitate
      </h1>

      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
        La <strong>Tutungerie</strong>, confidențialitatea ta este prioritatea noastră. Ne angajăm să
        protejăm datele tale personale și să fim transparenți cu privire la modul în care le colectăm, utilizăm și
        protejăm.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        Ce tip de informații colectăm?
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
        Colectăm următoarele informații:
      </p>
      <ul style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginLeft: '20px' }}>
        <li>Date personale: nume, adresă de e-mail, număr de telefon.</li>
        <li>Date de facturare și livrare: adresa de livrare și detalii de plată.</li>
        <li>Informații despre interacțiunile tale cu site-ul nostru: preferințe de cumpărături, produse vizualizate și achiziționate.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        Cum utilizăm informațiile tale?
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
        Folosim informațiile colectate pentru a oferi o experiență personalizată și eficientă:
      </p>
      <ul style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginLeft: '20px' }}>
        <li>Procesarea comenzilor și actualizarea statusului acestora.</li>
        <li>Îmbunătățirea experienței de navigare prin recomandări personalizate.</li>
        <li>Trimiterea de oferte speciale, reduceri și alte informații relevante.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        Cum protejăm informațiile tale?
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px' }}>
        Ne angajăm să protejăm datele tale personale prin:
      </p>
      <ul style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginLeft: '20px' }}>
        <li>Criptarea datelor sensibile pentru a asigura securitatea acestora.</li>
        <li>Limitarea accesului la date doar pentru personalul autorizat.</li>
        <li>Monitorizarea continuă a sistemelor noastre pentru a preveni accesul neautorizat.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        Contact
      </h2>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
        Dacă ai întrebări despre modul în care gestionăm datele tale personale, ne poți contacta oricând la
        <a href="mailto:mihaiandrei1304@gmail.com" style={{ color: '#D32F2F', fontWeight: 'bold' }}>
          {' '}contact.tutungerie@gmail.com
        </a>.
      </p>

      <div style={{ marginTop: '40px' }}>
        <Link
          to="/Magazin"
          style={{
            padding: '12px 24px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#D32F2F',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Înapoi la magazin
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
