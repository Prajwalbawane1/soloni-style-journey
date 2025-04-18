
import React from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X } from "lucide-react";

interface FilterSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  selectedMaterials: string[];
  setSelectedMaterials: (materials: string[]) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  clearFilters: () => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (isOpen: boolean) => void;
}

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
  "Black", "Tan", "Navy", "Blush Pink", "Caramel",
  "Gold", "Silver", "Olive Green", "Cognac", "Burgundy",
  "Mustard", "Red", "Royal Blue", "Taupe", "White"
];

const materials = ["Leather", "Canvas", "Satin", "Metal"];

const FilterSidebar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedColors,
  setSelectedColors,
  selectedMaterials,
  setSelectedMaterials,
  priceRange,
  setPriceRange,
  clearFilters,
  isFilterOpen,
  setIsFilterOpen
}: FilterSidebarProps) => {
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

  return (
    <div className={`lg:w-1/4 ${isFilterOpen ? "block fixed inset-0 z-50 bg-white p-6 overflow-auto" : "hidden lg:block"}`}>
      {isFilterOpen && (
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <h3 className="font-playfair text-xl font-semibold">Filters</h3>
          <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
            <X size={20} />
          </Button>
        </div>
      )}

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
              <label htmlFor={`color-${color}`} className="ml-2 text-gray-700 cursor-pointer">
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>

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
              <label htmlFor={`material-${material}`} className="ml-2 text-gray-700 cursor-pointer">
                {material}
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full border-soloni-gold text-soloni-gold hover:bg-soloni-gold hover:text-white"
        onClick={clearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  );
};

export default FilterSidebar;
