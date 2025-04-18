
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { featuredProducts } from "@/data/products";
import ProductCard from "./ProductCard";

const FeaturedCollection = () => {
  const [activeTab, setActiveTab] = useState("bestsellers");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium bags designed for style and functionality.
            Each piece tells a unique story.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex border border-gray-200 rounded-full p-1 bg-white">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "bestsellers"
                  ? "bg-soloni-green text-white"
                  : "text-gray-600 hover:text-soloni-green"
              }`}
              onClick={() => setActiveTab("bestsellers")}
            >
              Bestsellers
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "new"
                  ? "bg-soloni-green text-white"
                  : "text-gray-600 hover:text-soloni-green"
              }`}
              onClick={() => setActiveTab("new")}
            >
              New Arrivals
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "sale"
                  ? "bg-soloni-green text-white"
                  : "text-gray-600 hover:text-soloni-green"
              }`}
              onClick={() => setActiveTab("sale")}
            >
              On Sale
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts
            .filter(product => {
              if (activeTab === "bestsellers") return product.isBestseller;
              if (activeTab === "new") return product.isNew;
              if (activeTab === "sale") return product.oldPrice !== null;
              return true;
            })
            .slice(0, 8)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            variant="outline" 
            className="border-soloni-green text-soloni-green hover:bg-soloni-green hover:text-white"
          >
            <Link to="/shop">
              View All Collection <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
