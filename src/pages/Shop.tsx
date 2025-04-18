
import { useState, useEffect } from "react";
import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, SlidersHorizontal, X } from "lucide-react";

const categories = [
  "All",
  "Tote",
  "Crossbody",
  "Clutch",
  "Backpack",
  "Satchel",
  "Travel",
  "Bucket Bag",
  "Shoulder Bag"
];

const colors = [
  "Black",
  "Tan",
  "Navy",
  "Blush Pink",
  "Caramel",
  "Gold",
  "Silver",
  "Olive Green",
  "Cognac",
  "Burgundy",
  "Mustard",
  "Red",
  "Royal Blue",
  "Taupe",
  "White"
];

const materials = [
  "Leather",
  "Canvas",
  "Satin",
  "Metal"
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleColor = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const toggleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      setSelectedMaterials(selectedMaterials.filter(m => m !== material));
    } else {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  const filteredProducts = allProducts.filter(product => {
    // Category filter
    if (selectedCategory !== "All" && product.category !== selectedCategory) {
      return false;
    }

    // Color filter
    if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) {
      return false;
    }

    // Material filter
    if (selectedMaterials.length > 0 && !product.materials.some(material => selectedMaterials.includes(material))) {
      return false;
    }

    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    // Search query filter
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

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden w-full flex justify-between items-center mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search bags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-soloni-gold/50"
              />
            </div>
            <Button
              variant="outline"
              className="ml-2 border-gray-200"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal size={18} className="mr-2" />
              Filters
            </Button>
          </div>

          {/* Sidebar Filters */}
          <div
            className={`lg:w-1/4 ${
              isFilterOpen ? "block fixed inset-0 z-50 bg-white p-6 overflow-auto" : "hidden lg:block"
            }`}
          >
            {isFilterOpen && (
              <div className="flex justify-between items-center mb-6 lg:hidden">
                <h3 className="font-playfair text-xl font-semibold">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFilterOpen(false)}
                >
                  <X size={20} />
                </Button>
              </div>
            )}

            {/* Search - Desktop */}
            <div className="hidden lg:block mb-8">
              <h3 className="font-playfair text-lg font-semibold mb-4">Search</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search bags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-soloni-gold/50"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-playfair text-lg font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left py-1 px-2 rounded-md transition-colors ${
                      selectedCategory === category
                        ? "bg-soloni-green text-white"
                        : "hover:bg-soloni-green/10"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="font-playfair text-lg font-semibold mb-4">Price Range</h3>
              <Slider
                defaultValue={[0, 300]}
                max={300}
                step={10}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value)}
                className="mb-4"
              />
              <div className="flex items-center justify-between">
                <span className="text-gray-600">${priceRange[0]}</span>
                <span className="text-gray-600">${priceRange[1]}</span>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="font-playfair text-lg font-semibold mb-4">Colors</h3>
              <div className="space-y-2">
                {colors.map((color) => (
                  <div key={color} className="flex items-center">
                    <Checkbox
                      id={`color-${color}`}
                      checked={selectedColors.includes(color)}
                      onCheckedChange={() => toggleColor(color)}
                    />
                    <label
                      htmlFor={`color-${color}`}
                      className="ml-2 text-gray-700 cursor-pointer"
                    >
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials */}
            <div className="mb-8">
              <h3 className="font-playfair text-lg font-semibold mb-4">Materials</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <div key={material} className="flex items-center">
                    <Checkbox
                      id={`material-${material}`}
                      checked={selectedMaterials.includes(material)}
                      onCheckedChange={() => toggleMaterial(material)}
                    />
                    <label
                      htmlFor={`material-${material}`}
                      className="ml-2 text-gray-700 cursor-pointer"
                    >
                      {material}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Reset Filters */}
            <Button
              variant="outline"
              className="w-full border-soloni-gold text-soloni-gold hover:bg-soloni-gold hover:text-white"
              onClick={clearFilters}
            >
              Clear All Filters
            </Button>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
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

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
