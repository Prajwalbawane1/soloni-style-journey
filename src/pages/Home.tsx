
import HeroSection from "@/components/HeroSection";
import FeaturedCollection from "@/components/FeaturedCollection";
import CategorySection from "@/components/CategorySection";
import TestimonialSection from "@/components/TestimonialSection";
import InstagramSection from "@/components/InstagramSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedCollection />
      <CategorySection />
      <div className="py-16 bg-soloni-pink/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Bags with a Soul
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-lg">
            At SoloniBags, we believe that every bag tells a story. Our pieces are more than just fashion accessories – they're crafted companions for your journey through life's moments, both big and small. Each design is created with purpose, passion, and a deep appreciation for quality craftsmanship.
          </p>
        </div>
      </div>
      <TestimonialSection />
      <InstagramSection />
    </div>
  );
};

export default Home;
