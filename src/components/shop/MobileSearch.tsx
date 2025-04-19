
import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface MobileSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setIsFilterOpen: (isOpen: boolean) => void;
}

const MobileSearch = ({ searchQuery, setSearchQuery, setIsFilterOpen }: MobileSearchProps) => {
  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="lg:hidden w-full flex justify-between items-center mb-4">
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search bags..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 py-2 border border-gray-200 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-soloni-gold/50"
        />
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          >
            <X size={18} />
          </button>
        )}
      </div>
      <Button
        variant="outline"
        className="ml-2 border-gray-200"
        onClick={() => setIsFilterOpen(true)}
      >
        <SlidersHorizontal size={18} className="mr-2" />
        Filters
      </Button>
    </div>
  );
};

export default MobileSearch;
