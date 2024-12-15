import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from '../../components/RatingStars';

const ProductCards = ({ products }) => {
  const getPriceRange = (product) => {
    if (product.category === 'Tutun la găleată' || product.category === 'Tutun la pungă') {
      const prices = Object.values(product.price);
      return `${Math.min(...prices).toFixed(2)} lei - ${Math.max(...prices).toFixed(2)} lei`;
    } else if (typeof product.price === 'number') {
      return `${product.price.toFixed(2)} lei`;
    }
    return 'Price not available';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <div key={index} className="product_card">
          <div className="relative">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 md:h-64 w-full object-cover hover:scale-105 transition-all duration-300"
              />
            </Link>
            <div className="product__card__content">
              <h4>{product.name}</h4>
              <p>{getPriceRange(product)}</p>
              <RatingStars rating={product.rating} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
