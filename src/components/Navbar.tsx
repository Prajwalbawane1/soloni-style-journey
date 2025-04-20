import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = localStorage.getItem("cart");
      if (cart) {
        setCartCount(JSON.parse(cart).length);
      }
    };

    // Initial count
    updateCartCount();

    // Update count when storage changes
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-playfair font-bold text-soloni-green">
            <span className="text-soloni-gold">Soloni</span>Bags
          </h1>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link font-medium text-gray-800 hover:text-soloni-gold">
            Home
          </Link>
          <Link to="/shop" className="nav-link font-medium text-gray-800 hover:text-soloni-gold">
            Shop
          </Link>
          <Link to="/about" className="nav-link font-medium text-gray-800 hover:text-soloni-gold">
            About
          </Link>
          <Link to="/shop" className="nav-link font-medium text-gray-800 hover:text-soloni-gold">
            Collections
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button aria-label="Search" className="p-2 hover:text-soloni-gold transition-colors">
            <Search size={20} />
          </button>
          <Link 
            to="/cart" 
            aria-label="Cart" 
            className="p-2 hover:text-soloni-gold transition-colors relative"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-soloni-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
          <Link 
            to="/profile" 
            aria-label="Profile" 
            className="p-2 hover:text-soloni-gold transition-colors"
          >
            <User size={20} />
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg animate-slide-in">
          <div className="container mx-auto px-4 py-4 flex flex-col">
            <Link
              to="/"
              className="py-3 border-b border-gray-100 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="py-3 border-b border-gray-100 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="py-3 border-b border-gray-100 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/shop"
              className="py-3 border-b border-gray-100 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Collections
            </Link>

            <div className="flex items-center space-x-4 mt-4">
              <button aria-label="Search" className="p-2">
                <Search size={20} />
              </button>
              <Link 
                to="/cart" 
                aria-label="Cart" 
                className="p-2 relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-soloni-gold text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
              <Link 
                to="/profile" 
                aria-label="Profile" 
                className="p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
