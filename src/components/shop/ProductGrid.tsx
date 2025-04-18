
import React from 'react';
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  products: Product[];
  clearFilters: () => void;
}

const ProductGrid = ({ products, clearFilters }: ProductGridProps) => {
  return (
    <div className="lg:w-3/4">
      <div className="mb-6 flex justify-between items-center">
        <p className="text-gray-600">
          Showing {products.length} {products.length === 1 ? "product" : "products"}
        </p>
        <div className="flex items-center">
          <span className="mr-2 text-gray-600">Sort by:</span>
          <select className="border border-gray-200 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-soloni-gold/50">
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
        </div>
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
