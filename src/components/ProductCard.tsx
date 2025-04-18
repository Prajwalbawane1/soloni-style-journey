
import { Link, useNavigate } from "react-router-dom";
import { Product } from "@/types";
import { ShoppingBag, Heart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = async (product: Product) => {
    setIsLoading(true);
    // Store the selected product in localStorage for the checkout page
    localStorage.setItem("buyNowProduct", JSON.stringify(product));
    navigate("/checkout");
    setIsLoading(false);
  };

  return (
    <div className="product-card group rounded-lg overflow-hidden bg-white">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-soloni-gold hover:text-white">
              <Heart size={18} />
            </Button>
            <Button size="sm" variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-soloni-gold hover:text-white">
              <ShoppingBag size={18} />
            </Button>
          </div>
        </div>
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-soloni-gold text-white px-3 py-1 text-xs font-medium rounded-full">
            New
          </div>
        )}
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-playfair text-lg font-medium mb-1 hover:text-soloni-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 font-medium">${product.price.toFixed(2)}</p>
          {product.oldPrice && (
            <p className="text-gray-400 line-through text-sm">${product.oldPrice.toFixed(2)}</p>
          )}
        </div>
        <div className="mt-2 flex items-center">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < product.rating ? "text-soloni-gold" : "text-gray-300"}>
                ★
              </span>
            ))}
          </div>
          <span className="ml-2 text-gray-500 text-sm">
            ({product.reviews} {product.reviews === 1 ? "review" : "reviews"})
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-soloni-gold text-soloni-gold hover:bg-soloni-gold hover:text-white"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-soloni-gold hover:bg-soloni-gold/90"
            onClick={() => handleBuyNow(product)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Buy Now"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
