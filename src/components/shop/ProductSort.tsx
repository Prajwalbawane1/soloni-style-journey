
import React from 'react';

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'popular';

interface ProductSortProps {
  sortBy: SortOption;
  setSortBy: (option: SortOption) => void;
}

const ProductSort = ({ sortBy, setSortBy }: ProductSortProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-gray-600">Sort by:</span>
      <select 
        className="border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-soloni-gold/50"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortOption)}
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="popular">Most Popular</option>
      </select>
    </div>
  );
};

export default ProductSort;
