
import { useState, useEffect } from "react";
import { allProducts } from "@/data/products";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";
import MobileSearch from "@/components/shop/MobileSearch";
import { Button } from "@/components/ui/button"; // Add this import
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

// Define SortOption type to match ProductSort.tsx
type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'popular';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("newest"); // Changed from string to SortOption
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) {
      return false;
    }
    if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) {
      return false;
    }
    if (selectedMaterials.length > 0 && !product.materials.some(material => selectedMaterials.includes(material))) {
      return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    return true;
  });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'popular':
        return b.reviews - a.reviews;
      case 'newest':
      default:
        return b.id - a.id; // Assuming newer products have higher IDs
    }
  });

  // Get current page products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedColors([]);
    setSelectedMaterials([]);
    setPriceRange([0, 300]);
    setSearchQuery("");
    setSortBy("newest");
    setCurrentPage(1);
  };

  const removeFilter = (type: string, value?: string) => {
    switch (type) {
      case 'category':
        setSelectedCategory("All");
        break;
      case 'color':
        if (value) {
          setSelectedColors(prev => prev.filter(color => color !== value));
        }
        break;
      case 'material':
        if (value) {
          setSelectedMaterials(prev => prev.filter(material => material !== value));
        }
        break;
      case 'search':
        setSearchQuery("");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    // Reset to page 1 when filters change
    setCurrentPage(1);
  }, [selectedCategory, selectedColors, selectedMaterials, priceRange, searchQuery, sortBy]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  // Check if any filters are active
  const hasActiveFilters = selectedCategory !== "All" || 
                          selectedColors.length > 0 || 
                          selectedMaterials.length > 0 || 
                          priceRange[0] > 0 || 
                          priceRange[1] < 300 ||
                          searchQuery !== "";

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Shop All Bags</h1>
          <p className="text-gray-600">
            Discover our curated collection of premium bags crafted for style and functionality.
          </p>
        </div>

        <MobileSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setIsFilterOpen={setIsFilterOpen}
        />

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 mr-2">Active filters:</span>
            
            {selectedCategory !== "All" && (
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                Category: {selectedCategory}
                <button onClick={() => removeFilter('category')} className="ml-1">
                  <X size={14} />
                </button>
              </Badge>
            )}
            
            {selectedColors.map(color => (
              <Badge key={color} variant="outline" className="flex items-center gap-1 px-3 py-1">
                Color: {color}
                <button onClick={() => removeFilter('color', color)} className="ml-1">
                  <X size={14} />
                </button>
              </Badge>
            ))}
            
            {selectedMaterials.map(material => (
              <Badge key={material} variant="outline" className="flex items-center gap-1 px-3 py-1">
                Material: {material}
                <button onClick={() => removeFilter('material', material)} className="ml-1">
                  <X size={14} />
                </button>
              </Badge>
            ))}
            
            {searchQuery && (
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                Search: {searchQuery}
                <button onClick={() => removeFilter('search')} className="ml-1">
                  <X size={14} />
                </button>
              </Badge>
            )}

            {hasActiveFilters && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters} 
                className="text-red-500 text-sm hover:text-red-700"
              >
                Clear all
              </Button>
            )}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedMaterials={selectedMaterials}
            setSelectedMaterials={setSelectedMaterials}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            clearFilters={clearFilters}
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
          />
          
          <ProductGrid 
            products={currentProducts} 
            clearFilters={clearFilters}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>
        
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Shop;
