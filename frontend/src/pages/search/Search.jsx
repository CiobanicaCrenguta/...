import React, { useState, useEffect } from 'react';
import productsData from "../../data/products.json";
import ProductCards from '../shop/ProductCards';

const Search = () => {
  const [searchQuerry, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = () => {
    const query = searchQuerry.toLowerCase();
    const filtered = productsData.filter(
      product => product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  // Use useEffect to add an event listener for the Enter key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [searchQuerry]);

  return (
    <>
      <section className='section__container' style={{ backgroundColor: '#FCF7F7' }}>
        <p className='section__subheader'>
          Alege dintr-o selecție variată de produse de calitate, gândite să răspundă nevoilor tale. Calitate constantă și prețuri competitive pentru fiecare preferință.
        </p>
      </section>
      <section className='section__container'>
        <div className='w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4'>
          <input
            type="text"
            value={searchQuerry}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='search-bar w-full max-w-full-4xl p-2 border rounded'
            placeholder='Caută produse...'
          />
          <button
            onClick={handleSearch}
            className='search-button py-2 px-8 bg-primary text-white rounded ml-2'
          >
            Caută
          </button>
        </div>
        <ProductCards products={filteredProducts}/>
      </section>
    </>
  );
};

export default Search;
