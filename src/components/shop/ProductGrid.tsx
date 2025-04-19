
import React from 'react';
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import ProductSort from "@/components/shop/ProductSort";

// Import the SortOption type from ProductSort
type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'popular';

interface ProductGridProps {
  products: Product[];
  clearFilters: () => void;
  sortBy: SortOption; // Changed from string to SortOption
  setSortBy: (option: SortOption) => void; // Updated parameter type
}

const ProductGrid = ({ products, clearFilters, sortBy, setSortBy }: ProductGridProps) => {
  return (
    <div className="lg:w-3/4">
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-600">
          Showing {products.length} {products.length === 1 ? "product" : "products"}
        </p>
        <ProductSort sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 py-16 text-center rounded-lg">
          <h3 className="text-xl font-playfair mb-2">No products found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your filters or search criteria
          </p>
          <Button onClick={clearFilters}>
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
