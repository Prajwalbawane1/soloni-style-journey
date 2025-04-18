
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="mb-4 inline-block">
              <h2 className="text-2xl font-playfair font-bold text-soloni-green">
                <span className="text-soloni-gold">Soloni</span>Bags
              </h2>
            </Link>
            <p className="text-gray-600 mb-4">
              Crafted for confidence – bags with a soul for every mood, moment, and milestone.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-soloni-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-soloni-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-soloni-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  All Bags
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  Handbags
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  Clutches
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  Backpacks
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  Our Stores
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-soloni-gold transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="rounded-md border-gray-300"
              />
              <Button className="bg-soloni-green hover:bg-soloni-green/90 text-white font-medium">
                <Mail size={16} className="mr-2" /> Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} SoloniBags. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-500 hover:text-soloni-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-500 hover:text-soloni-gold text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="text-gray-500 hover:text-soloni-gold text-sm transition-colors">
                Shipping
              </Link>
              <Link to="/" className="text-gray-500 hover:text-soloni-gold text-sm transition-colors">
                Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
