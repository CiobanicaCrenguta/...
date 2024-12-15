import React, { useState } from 'react';
import ProductCards from './ProductCards';
import productsData from '../../data/products.json';

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);

    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => Math.min(prevCount + 4, productsData.length));
    };

    const showLessProducts = () => {
        setVisibleProducts(8);
    };

    return (
        <section className='section_container product__container'>
            <h2 className='section__header'>Cele mai căutate produse</h2>
            <p className='section__subheader mb-12'>Descoperă cele mai apreciate produse din tutungeria noastră online!</p>
            {/* Product cards */}
            <div className="mt-12">
                <ProductCards products={productsData.slice(0, visibleProducts)} />
            </div>
            {/* Load more/Show less buttons */}
            <div className='product__btn'>
                {visibleProducts < productsData.length && (
                    <button className='btn' onClick={loadMoreProducts}>Mai multe</button>
                )}
                {visibleProducts >= productsData.length && (
                    <button className='btn' onClick={showLessProducts}>Arată mai puțin</button>
                )}
            </div>
        </section>
    );
};

export default TrendingProducts;