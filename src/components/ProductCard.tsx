
import { Link, useNavigate } from "react-router-dom";
import { Product } from "@/types";
import { ShoppingBag, Heart, Loader2, Eye, ImageOff, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Convert USD to INR (approximate rate: 1 USD = 83 INR)
  const priceInINR = Math.round(product.price * 83);
  const oldPriceInINR = product.oldPrice ? Math.round(product.oldPrice * 83) : null;

  const handleBuyNow = async (product: Product) => {
    setIsLoading(true);
    // Store the selected product in localStorage for the checkout page
    localStorage.setItem("buyNowProduct", JSON.stringify({
      ...product,
      price: priceInINR,
      oldPrice: oldPriceInINR
    }));
    navigate("/checkout");
    setIsLoading(false);
  };

  const handleAddToCart = async (product: Product) => {
    setIsAddingToCart(true);
    
    // Get existing cart from localStorage or initialize empty array
    const existingCart = localStorage.getItem("cart");
    const cart = existingCart ? JSON.parse(existingCart) : [];
    
    // Check if product already exists in cart
    const existingProductIndex = cart.findIndex((item: Product) => item.id === product.id);
    
    if (existingProductIndex >= 0) {
      // Product exists, increment quantity (assuming we had a quantity field)
      toast({
        title: "Already in cart",
        description: "This item is already in your shopping cart",
      });
    } else {
      // Add product to cart with INR pricing
      cart.push({
        ...product,
        price: priceInINR,
        oldPrice: oldPriceInINR
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
      });
    }
    
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 500);
  };

  // Simulate view counter
  const viewCount = product.reviews * 3 + Math.floor(Math.random() * 20);

  // Calculate discount percentage
  const discountPercentage = oldPriceInINR ? Math.round(((oldPriceInINR - priceInINR) / oldPriceInINR) * 100) : 0;

  return (
    <div className="product-card group rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          {imageError ? (
            <div className="w-full h-80 bg-gray-100 flex items-center justify-center">
              <ImageOff className="h-12 w-12 text-gray-400" />
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          )}
        </Link>
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="rounded-full bg-white text-gray-800 hover:bg-orange-500 hover:text-white border-orange-500">
              <Heart size={18} />
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="rounded-full bg-white text-gray-800 hover:bg-orange-500 hover:text-white border-orange-500"
              onClick={() => handleAddToCart(product)}
            >
              <ShoppingBag size={18} />
            </Button>
          </div>
        </div>
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 text-xs font-medium rounded-full">
            New
          </div>
        )}
        {product.isBestseller && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 text-xs font-medium rounded-full">
            Bestseller
          </div>
        )}
        {discountPercentage > 0 && (
          <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">
            {discountPercentage}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-playfair text-lg font-medium mb-2 hover:text-orange-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <IndianRupee className="h-4 w-4 text-gray-600" />
            <span className="text-lg font-bold text-gray-800">{priceInINR.toLocaleString('en-IN')}</span>
          </div>
          {oldPriceInINR && (
            <div className="flex items-center gap-1">
              <IndianRupee className="h-3 w-3 text-gray-400" />
              <span className="text-gray-400 line-through text-sm">{oldPriceInINR.toLocaleString('en-IN')}</span>
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < product.rating ? "text-orange-500" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="ml-2 text-gray-500 text-sm">
              ({product.reviews})
            </span>
          </div>
          <div className="flex items-center text-gray-500 text-xs">
            <Eye size={14} className="mr-1" />
            <span>{viewCount} views</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
            onClick={() => handleAddToCart(product)}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </>
            )}
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
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
        <div className="mt-2 text-center">
          <div className="flex items-center justify-center gap-1 text-xs text-green-600">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Free delivery across India</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">COD available</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
