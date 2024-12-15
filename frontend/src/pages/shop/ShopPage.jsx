import React, { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import ProductCards from './ProductCards';
import ShopFiltering from './ShopFiltering';

const filters = {
  categories: ['Toate', 'Tutun la găleată', 'Tutun la pungă'],
  priceRanges: [
    { label: 'sub 50 lei', min: 0, max: 50 },
    { label: '50 lei - 100 lei', min: 50, max: 100 },
    { label: 'peste 100 lei', min: 100, max: Infinity },
  ],
};

const ShopPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: 'Toate',
    priceRange: '',
  });

  const applyFilters = () => {
    let filteredProducts = productsData;

    if (filtersState.category && filtersState.category !== 'Toate') {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filtersState.category
      );
    }

    if (filtersState.priceRange) {
      const { min, max } = filters.priceRanges.find(
        (range) => range.label === filtersState.priceRange
      );
      filteredProducts = filteredProducts.filter((product) => {
        const prices = Object.values(product.price);
        return prices.some((price) => price >= min && price <= max);
      });
    }

    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [filtersState]);

  const clearFilters = () => {
    setFiltersState({
      category: 'Toate',
      priceRange: '',
    });
  };

  return (
    <section className="section__container">
      <h2 className="section__header capitalize">Magazin</h2>
      <p className="section__subheader">
        Descoperiți selecția noastră variată de tutun ambalat la găleată și pungă.
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <ShopFiltering
          filters={filters}
          filtersState={filtersState}
          setFiltersState={setFiltersState}
          clearFilters={clearFilters}
        />
        <div>
          <h3 className="text-xl font-medium mb-4">Produse Disponibile: {products.length}</h3>
          <ProductCards products={products} />
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
