import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../../../data/products.json';
import RatingStars from '../../../components/RatingStars';

const SingleProduct = () => {
  const { productId } = useParams();
  const productIdNumber = parseInt(productId, 10);
  const singleProduct = products.find((product) => product.id === productIdNumber);

  if (!singleProduct) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2 style={{ fontSize: '2rem', color: '#6B6A6A' }}>Produsul nu se poate găsi</h2>
        <p style={{ color: '#A6A6A6', fontSize: '1.2rem', marginBottom: '20px' }}>
          Produsul pe care îl cauți nu există sau a fost eliminat.
        </p>
        <Link
          to="/Magazin"
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            color: '#fff',
            backgroundColor: '#B0B0B0',
            textDecoration: 'none',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          Înapoi la magazin
        </Link>
      </div>
    );
  }

  const renderPriceOptions = () => {
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {Object.entries(singleProduct.price).map(([key, value]) => (
          <li
            key={key}
            style={{
              marginBottom: '10px',
              fontSize: '1rem',
              background: '#F7F7F7',
              padding: '10px 15px',
              borderRadius: '12px',
              border: '1px solid #E1E1E1',
              textAlign: 'center',
              color: '#6B6A6A',
              fontWeight: '500',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <strong>{key}:</strong> {value.toFixed(2)} lei
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <section
  style={{
    background: 'linear-gradient(135deg, rgba(252, 247, 247, 0.8), rgba(242, 241, 241, 0.8))', 
    padding: '20px',
    textAlign: 'center',
    borderBottom: '1px solid #D1D1D1',
  }}
>
  <nav style={{ display: 'inline-block', fontSize: '1rem', color: '#6B6A6A' }}>
    <Link to="/" style={{ color: '#6B6A6A', textDecoration: 'none', fontWeight: '500' }}>
      Pagina Principală
    </Link>
    <span style={{ margin: '0 10px' }}>›</span>
    <Link to="/Magazin" style={{ color: '#6B6A6A', textDecoration: 'none', fontWeight: '500' }}>
      Magazin
    </Link>
    <span style={{ margin: '0 10px' }}>›</span>
    <span style={{ color: '#4E4E4E', fontWeight: 'bold' }}>{singleProduct.name}</span>
  </nav>
</section>


      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
          alignItems: 'flex-start',
          background: '#FCF7F7',
          borderRadius: '15px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ flex: '1 1 50%' }}>
        <img
  src={singleProduct?.image || 'https://via.placeholder.com/400x300'}
  alt={singleProduct?.name}
  style={{
    width: '100%',
    maxWidth: '700px', // Limit the maximum width
    maxHeight: '600px', // Limit the maximum height
    borderRadius: '15px',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
    objectFit: 'cover', // Ensure the image maintains proportions
    margin: '0 auto', // Center the image if necessary
  }}
/>
        </div>

        <div style={{ flex: '1 1 50%', fontFamily: '"Poppins", sans-serif', color: '#4E4E4E' }}>
          <h3 style={{ fontSize: '2.2rem', fontWeight: '600', marginBottom: '20px', color: '#6B6A6A' }}>
            {singleProduct?.name}
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px', color: '#6B6A6A' }}>
            {singleProduct?.description}
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '10px', color: '#6B6A6A' }}>
            <strong>Categorie:</strong> {singleProduct?.category || 'N/A'}
          </p>
          {singleProduct.cantitate && (
            <p style={{ fontSize: '1rem', marginBottom: '10px', color: '#6B6A6A' }}>
              <strong>Cantitate:</strong> {singleProduct.cantitate}
            </p>
          )}
          {singleProduct.calitate && (
            <p style={{ fontSize: '1rem', marginBottom: '10px', color: '#6B6A6A' }}>
              <strong>Calitate:</strong> {singleProduct.calitate}
            </p>
          )}

          <h4 style={{ fontSize: '1.6rem', marginTop: '20px', marginBottom: '10px', color: '#6B6A6A' }}>
            Prețuri:
          </h4>
          {renderPriceOptions()}

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
            <strong style={{ fontSize: '1rem', color: '#6B6A6A' }}>Rating:</strong>
            <RatingStars rating={singleProduct.rating || 0} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
