import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) => 
      product.category.toLowerCase() === categoryName.toLowerCase()
    );
    setFilteredProducts(filtered);
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [categoryName]);
  

  return (
    <>
      <section className='section__container' style={{ backgroundColor: '#FCF7F7' }}>
        <h2 className='section__header capitalize'>{categoryName}</h2>
        <p className='section__subheader'>
          Alege dintr-o selecție variată de produse de calitate, gândite să răspundă nevoilor tale. Calitate constantă și prețuri competitive pentru fiecare preferință.
        </p>
      </section>

      {/* Product card */}
      <div className='section__container'>
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
}

export default CategoryPage;
