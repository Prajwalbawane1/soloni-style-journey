
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-soloni-beige px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-playfair font-bold text-soloni-gold mb-4">404</h1>
        <h2 className="text-2xl font-playfair font-semibold text-soloni-green mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          We're sorry, but the page you're looking for doesn't exist. Perhaps you'd like to explore our collection instead?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-soloni-green hover:bg-soloni-green/90 text-white"
          >
            <Link to="/">
              Return Home
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            className="border-soloni-gold text-soloni-gold hover:bg-soloni-gold hover:text-white"
          >
            <Link to="/shop">
              Shop Collection <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
