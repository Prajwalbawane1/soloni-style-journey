
import React from 'react';
import { Product } from "@/types";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import ProductSort from "@/components/shop/ProductSort";
import { Grid3X3, Rows } from 'lucide-react';

// Import the SortOption type from ProductSort
type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'popular';

interface ProductGridProps {
  products: Product[];
  clearFilters: () => void;
  sortBy: SortOption; // Changed from string to SortOption
  setSortBy: (option: SortOption) => void; // Updated parameter type
}

const ProductGrid = ({ products, clearFilters, sortBy, setSortBy }: ProductGridProps) => {
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  return (
    <div className="lg:w-3/4">
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center">
          <p className="text-gray-600 mr-4">
            Showing {products.length} {products.length === 1 ? "product" : "products"}
          </p>
          <div className="hidden sm:flex space-x-1 border rounded-md">
            <Button 
              size="sm" 
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              className="h-8 px-2"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 size={16} />
            </Button>
            <Button 
              size="sm" 
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              className="h-8 px-2"
              onClick={() => setViewMode('list')}
            >
              <Rows size={16} />
            </Button>
          </div>
        </div>
        <ProductSort sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {products.length > 0 ? (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
          : "space-y-4"
        }>
          {products.map((product) => (
            <div key={product.id} className={viewMode === 'list' ? "flex bg-white rounded-lg overflow-hidden" : ""}>
              {viewMode === 'list' && (
                <div className="w-1/3">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                </div>
              )}
              <div className={viewMode === 'list' ? "w-2/3" : ""}>
                <ProductCard product={product} />
              </div>
            </div>
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
