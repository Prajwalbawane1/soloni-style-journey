
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getProductById, featuredProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, Heart, ArrowLeft, Star, Truck, Shield, RefreshCw, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(getProductById(parseInt(id || "0")));
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!product) {
      navigate("/shop");
    }
    window.scrollTo(0, 0);
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const relatedProducts = featuredProducts
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center text-sm">
          <Link to="/" className="text-gray-500 hover:text-soloni-gold">Home</Link>
          <ChevronRight size={14} className="mx-2 text-gray-400" />
          <Link to="/shop" className="text-gray-500 hover:text-soloni-gold">Shop</Link>
          <ChevronRight size={14} className="mx-2 text-gray-400" />
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* Back Button - Mobile */}
        <Button
          variant="ghost"
          className="flex items-center mb-6 lg:hidden"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to shop
        </Button>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Product Images */}
          <div className="lg:w-3/5">
            <div className="flex flex-col-reverse md:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 mt-4 md:mt-0">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`rounded-md overflow-hidden border-2 w-16 h-16 ${
                      activeImage === index ? "border-soloni-gold" : "border-transparent"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-grow rounded-lg overflow-hidden bg-white">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-2/5">
            {product.isNew && (
              <div className="inline-block bg-soloni-gold text-white px-3 py-1 text-xs font-medium rounded-full mb-3">
                New Arrival
              </div>
            )}

            <h1 className="text-3xl font-playfair font-bold mb-2">{product.name}</h1>

            {/* Price */}
            <div className="flex items-center mb-4">
              <p className="text-2xl font-semibold text-soloni-green">
                ${product.price.toFixed(2)}
              </p>
              {product.oldPrice && (
                <p className="ml-3 text-gray-400 line-through text-lg">
                  ${product.oldPrice.toFixed(2)}
                </p>
              )}
            </div>

            {/* Ratings */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < Math.floor(product.rating)
                        ? "text-soloni-gold"
                        : "text-gray-300"
                    }`}
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="ml-2 text-gray-600">
                ({product.reviews} {product.reviews === 1 ? "review" : "reviews"})
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Color: <span className="font-normal">{selectedColor}</span></h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className={`px-4 py-2 rounded-md border ${
                      selectedColor === color
                        ? "border-soloni-gold bg-soloni-gold/10"
                        : "border-gray-300 hover:border-soloni-gold"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity:</h3>
              <div className="flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center hover:bg-gray-100"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
                <p className="ml-4 text-gray-500">
                  {product.stock} items available
                </p>
              </div>
            </div>

            {/* Add to Cart & Wishlist Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-soloni-green hover:bg-soloni-green/90 text-white py-6 flex-grow">
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" className="border-soloni-gold text-soloni-gold hover:bg-soloni-gold hover:text-white py-6">
                <Heart size={18} className="mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Product Features */}
            <div className="border-t border-gray-200 pt-6 mb-6">
              <h3 className="font-medium mb-3">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-soloni-gold mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shipping Information */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-start mb-3">
                <Truck size={18} className="mr-2 text-soloni-green mt-0.5" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <RefreshCw size={18} className="mr-2 text-soloni-green mt-0.5" />
                <div>
                  <p className="font-medium">30-Day Returns</p>
                  <p className="text-sm text-gray-600">Hassle-free returns</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield size={18} className="mr-2 text-soloni-green mt-0.5" />
                <div>
                  <p className="font-medium">2-Year Warranty</p>
                  <p className="text-sm text-gray-600">On all our bags</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="materials">Materials & Care</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-semibold mb-4">Product Details</h3>
              <p className="text-gray-700 mb-4">
                Introducing {product.name} - designed for the modern, sophisticated individual who values both style and functionality. This bag is meticulously crafted to accompany you through various occasions, from casual outings to formal events.
              </p>
              <p className="text-gray-700 mb-4">
                Each {product.name} is carefully crafted by skilled artisans, ensuring exceptional quality and attention to detail. The bag's thoughtful design includes multiple compartments to keep your essentials organized, making it not just a fashion statement but a practical accessory for your daily life.
              </p>
              <p className="text-gray-700">
                With its timeless design and premium materials, the {product.name} is more than just an accessory – it's an investment piece that will elevate your wardrobe for years to come.
              </p>
            </TabsContent>
            <TabsContent value="materials" className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-semibold mb-4">Materials & Care</h3>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Materials:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.materials.map((material, index) => (
                    <li key={index}>{material}</li>
                  ))}
                  <li>Premium metal hardware</li>
                  <li>Durable lining</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Care Instructions:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Avoid exposure to direct sunlight, heat, and moisture</li>
                  <li>Clean with a soft, dry cloth</li>
                  <li>For leather bags, use a leather conditioner every 3-6 months</li>
                  <li>Store in the provided dust bag when not in use</li>
                  <li>Do not use harsh chemicals or solvents</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-semibold mb-4">Shipping & Returns</h3>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Shipping:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Free standard shipping on all orders over $100</li>
                  <li>Standard shipping (5-7 business days): $9.99</li>
                  <li>Express shipping (2-3 business days): $14.99</li>
                  <li>Same-day delivery available in select cities</li>
                  <li>International shipping available to select countries</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Returns:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>30-day hassle-free returns</li>
                  <li>Items must be unused and in original packaging</li>
                  <li>Free returns on orders over $100</li>
                  <li>Return shipping fee of $9.99 for orders under $100</li>
                  <li>Exchanges are processed free of charge</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-playfair font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
