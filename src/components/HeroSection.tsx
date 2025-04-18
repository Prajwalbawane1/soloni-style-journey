
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
          alt="Elegant bag collection"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 hero-gradient opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-4 animate-fade-in">
            Bags with a Soul
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Crafted for confidence – carry a SoloniBag for every mood, moment, and milestone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              asChild
              className="bg-soloni-green hover:bg-soloni-green/90 text-white text-lg font-medium px-8 py-6"
            >
              <Link to="/shop">
                Shop Now <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-soloni-green text-lg font-medium px-8 py-6"
            >
              <Link to="/about">
                Our Story
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
