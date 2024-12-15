import React from 'react';
import { Link } from 'react-router-dom';

const ReturnPolicy = () => {
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
        Politica de Retur
      </h1>

      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        La <strong>Tutungerie</strong>, dorim ca experiența ta de cumpărare să fie cât mai plăcută posibil. Dacă nu ești complet 
        mulțumit de achiziția ta, îți oferim o politică de retur simplă și transparentă.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        1. Termenul de retur
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Ai dreptul de a returna produsele în termen de 14 zile de la primirea acestora, conform legislației în vigoare. 
        Produsul trebuie să fie în stare nouă, neutilizat, fără semne de uzură și în ambalajul original.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        2. Produse neeligibile pentru retur
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Nu acceptăm returul următoarelor tipuri de produse:
      </p>
      <ul style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginLeft: '20px',
      }}>
        <li>Produse desigilate sau folosite (exceptând cazurile de defecte de fabricație).</li>
        <li>Produse personalizate sau confecționate pe comandă.</li>
        <li>Produse perisabile sau care expiră într-un termen scurt.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        3. Cum se face returul?
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Pentru a iniția un retur, urmează acești pași:
      </p>
      <ul style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginLeft: '20px',
      }}>
        <li>Contactează-ne prin email la <a href="mailto:mihaiandrei1304@gmail.com" style={{ color: '#D32F2F', fontWeight: 'bold' }}>contact.tutungerie@gmail.com</a> sau prin WhatsApp la <strong>0785610156</strong>.</li>
        <li>Furnizează detalii despre produsul pe care dorești să-l returnezi și motivele returului.</li>
        <li>După aprobarea returului, îți vom trimite instrucțiuni pentru trimiterea produsului înapoi.</li>
      </ul>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        4. Rambursarea sumelor
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Odată ce produsul a fost returnat și verificat, vom procesa rambursarea sumei plătite pentru produs, exclusiv costurile de livrare.
        Rambursarea va fi efectuată prin aceeași metodă de plată utilizată la achiziție, în termen de 14 zile lucrătoare.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        5. Costurile de retur
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Costurile de retur sunt suportate de către client, cu excepția cazurilor în care produsul returnat este defect sau nu corespunde comenzii tale.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        6. Produse defecte
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Dacă produsul este defect sau nu corespunde descrierii, te rugăm să ne contactezi imediat pentru a-l returna și pentru a solicita un schimb sau rambursare completă.
      </p>

      <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginTop: '30px', color: '#333' }}>
        7. Contact
      </h2>
      <p style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginBottom: '20px',
      }}>
        Pentru orice întrebări referitoare la politica de retur, nu ezita să ne contactezi prin următoarele metode:
      </p>
      <ul style={{
        fontSize: '1.1rem', 
        color: '#555', 
        lineHeight: '1.8', 
        marginLeft: '20px',
      }}>
        <li>Telefon: <strong>0785610156</strong></li>
        <li>Email: <a href="mailto:mihaiandrei1304@gmail.com" style={{ color: '#D32F2F', fontWeight: 'bold' }}>contact.tutungerie@gmail.com</a></li>
      </ul>

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

export default ReturnPolicy;
