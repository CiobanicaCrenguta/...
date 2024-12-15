import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
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
        Politica de Cookies
      </h1>

      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Aceptând această politică de cookies, sunteți de acord cu utilizarea fișierelor de tip cookie în scopurile descrise mai jos. 
        Te rugăm să citești cu atenție informațiile următoare despre politica noastră de utilizare a cookies.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        1. Ce sunt cookies?
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Fișierele cookies sunt fișiere mici care sunt stocate pe dispozitivul tău atunci când vizitezi un site web. Acestea sunt folosite 
        pentru a îmbunătăți experiența ta de utilizator, pentru a analiza traficul și pentru a personaliza conținutul.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        2. Tipuri de cookies utilizate
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Pe acest site folosim următoarele tipuri de cookies:
      </p>
      <ul style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginLeft: '20px',
      }}>
        <li><strong>Cookies necesare:</strong> Aceste cookies sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.</li>
        <li><strong>Cookies de performanță:</strong> Aceste cookies ne ajută să înțelegem cum sunt utilizate paginile noastre și să le îmbunătățim.</li>
        <li><strong>Cookies de publicitate:</strong> Aceste cookies sunt utilizate pentru a personaliza anunțurile și a îmbunătăți experiența ta.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        3. Cum controlezi cookies?
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Poți controla fișierele cookies accesând setările browser-ului tău. De asemenea, poți alege să le ștergi sau să le blochezi, dar 
        acest lucru poate afecta funcționalitatea site-ului nostru.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        4. De ce folosim cookies?
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Utilizăm cookies pentru a îmbunătăți performanța site-ului, pentru a personaliza conținutul în funcție de preferințele tale și 
        pentru a-ți oferi o experiență de navigare mai plăcută.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        5. Linkuri externe
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Acest site poate conține linkuri către alte site-uri. Nu suntem responsabili pentru politica de cookies a acestor site-uri externe. 
        Te încurajăm să citești politica de cookies a fiecărui site pe care îl vizitezi.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        6. Modificări ale politicii de cookies
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Ne rezervăm dreptul de a modifica această politică de cookies în orice moment. Orice modificare va fi postată pe această pagină 
        și va deveni efectivă imediat ce este publicată.
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

export default CookiePolicy;
