
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a symbol of elegance and craftsmanship in the world of bags.
          </p>
        </div>

        {/* Brand Story */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-20">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
              alt="SoloniBags founder"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-playfair font-bold mb-4">The Beginning</h2>
            <p className="text-gray-700 mb-4">
              SoloniBags was born from a passion for beautiful design and functional accessories. Founded in 2019 by Sophia Soloni, a designer with a background in luxury fashion, our brand embodies the belief that bags should be more than just containers – they should be expressions of personal style and crafted companions for life's journey.
            </p>
            <p className="text-gray-700 mb-6">
              Sophia's vision was simple yet profound: create bags with soul. Each design begins with a story, an inspiration drawn from architecture, nature, art, or the diverse experiences of women around the world. This philosophy has guided our brand from its first collection to where we stand today.
            </p>
            <div className="flex space-x-4">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Sophia Soloni"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-playfair font-semibold">Sophia Soloni</p>
                <p className="text-gray-600 text-sm">Founder & Creative Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-soloni-beige/50 rounded-lg p-8 mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-playfair font-bold mb-4">Our Mission & Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At SoloniBags, we're driven by a commitment to quality, sustainability, and timeless style.
              These core values guide every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-soloni-pink/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-soloni-green text-2xl font-playfair">1</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-700">
                We believe in creating pieces that stand the test of time. Each bag is meticulously crafted by skilled artisans using premium materials and time-honored techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-soloni-pink/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-soloni-green text-2xl font-playfair">2</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-gray-700">
                We're committed to responsible production. From sourcing eco-friendly materials to minimizing waste, sustainability is woven into every aspect of our business.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-soloni-pink/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-soloni-green text-2xl font-playfair">3</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">Timeless Design</h3>
              <p className="text-gray-700">
                We create bags that transcend trends. Our designs combine classic elegance with contemporary details, resulting in pieces that remain relevant and beautiful for years to come.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-playfair font-bold mb-4">Our Process</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              From initial concept to final creation, discover how each SoloniBag comes to life through our
              meticulous design and production process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-soloni-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-xl">01</span>
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Design</h3>
              <p className="text-gray-600">
                Every bag begins as a sketch inspired by art, architecture, and the needs of our customers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-soloni-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-xl">02</span>
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Material Selection</h3>
              <p className="text-gray-600">
                We carefully source the finest materials that meet our standards for quality and sustainability.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-soloni-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-xl">03</span>
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Crafting</h3>
              <p className="text-gray-600">
                Skilled artisans bring each design to life, combining traditional techniques with modern precision.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-soloni-gold text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair text-xl">04</span>
              </div>
              <h3 className="font-playfair font-semibold text-lg mb-2">Quality Control</h3>
              <p className="text-gray-600">
                Each bag undergoes rigorous inspection to ensure it meets our exacting standards before reaching you.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-playfair font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The passionate individuals behind SoloniBags who bring creativity, expertise, and dedication to every aspect of our brand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Sophia Soloni"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white">
                      "I believe in creating bags that become trusted companions in life's journey."
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair font-semibold text-xl">Sophia Soloni</h3>
              <p className="text-gray-600">Founder & Creative Director</p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Marcus Chen"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white">
                      "Quality craftsmanship and attention to detail are at the heart of everything we do."
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair font-semibold text-xl">Marcus Chen</h3>
              <p className="text-gray-600">Head of Product Development</p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Elena Rossi"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white">
                      "Sustainability isn't just a trend—it's a responsibility we embrace wholeheartedly."
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-playfair font-semibold text-xl">Elena Rossi</h3>
              <p className="text-gray-600">Sustainability Director</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-soloni-green/90 text-white rounded-lg p-10 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-4">Experience SoloniBags</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Discover our collection of thoughtfully designed bags crafted to accompany you through every moment and milestone.
          </p>
          <Button 
            asChild
            className="bg-white text-soloni-green hover:bg-soloni-gold hover:text-white text-lg px-8 py-6"
          >
            <Link to="/shop">
              Shop the Collection <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
