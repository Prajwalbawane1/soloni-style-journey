
import { useState, useEffect } from "react";
import { allProducts } from "@/data/products";
import FilterSidebar from "@/components/shop/FilterSidebar";
import ProductGrid from "@/components/shop/ProductGrid";
import MobileSearch from "@/components/shop/MobileSearch";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedColors([]);
    setSelectedMaterials([]);
    setPriceRange([0, 300]);
    setSearchQuery("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          
          <ProductGrid products={filteredProducts} clearFilters={clearFilters} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
