import React from 'react';
import { Link } from 'react-router-dom';
const category1 = '/assets/Tutun Winston Albastru la găleată și la pungă.png';
const category2 = '/assets/Tutun Davidoff Classic la Pungă.png';

const Categories = () => {
    const categories = [
        { name: 'Tutun la găleată', path: 'tutun la găleată', image: category1 },
        { name: 'Tutun la pungă', path: 'tutun la pungă', image: category2 },
    ];
    return (
        <div className='product__grid'>
            {categories.map((category) => (
                <Link key={category.name} to={`/categories/${category.path}`} className='categories__card'>
                    <img src={category.image} alt={category.name} />
                    <h4>{category.name}</h4>
                </Link>
            ))}
        </div>
    );
}

export default Categories;
