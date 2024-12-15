import React from 'react';

const ShopFiltering = ({ filters, filtersState, setFiltersState, clearFilters }) => {
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3 className="text-xl font-semibold">Filtre</h3>

      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Categorie</h4>
        <hr />
        {filters.categories.map((category) => (
          <label key={category} className="capitalize cursor-pointer flex items-center">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filtersState.category === category}
              onChange={(e) =>
                setFiltersState({ ...filtersState, category: e.target.value })
              }
              className="mr-2"
            />
            <span className="ml-1">{category}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Preț</h4>
        <hr />
        {filters.priceRanges.map((range) => (
          <label key={range.label} className="capitalize cursor-pointer flex items-center">
            <input
              type="radio"
              name="priceRange"
              value={range.label}
              checked={filtersState.priceRange === range.label}
              onChange={(e) =>
                setFiltersState({ ...filtersState, priceRange: e.target.value })
              }
              className="mr-2"
            />
            <span className="ml-1">{range.label}</span>
          </label>
        ))}
      </div>

      <button onClick={clearFilters} className="mt-4 bg-primary text-white py-2 px-4 rounded">
        Resetează filtrele
      </button>
    </div>
  );
};

export default ShopFiltering;
