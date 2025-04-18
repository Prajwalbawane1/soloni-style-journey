
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
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
      </div>
    </div>
  );
};

export default ProductCard;
