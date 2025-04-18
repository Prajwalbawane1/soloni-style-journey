
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Handbags",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    description: "Elegant and practical for everyday use"
  },
  {
    id: 2,
    name: "Clutches",
    image: "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
    description: "Perfect for special occasions"
  },
  {
    id: 3,
    name: "Backpacks",
    image: "https://images.unsplash.com/photo-1581605405298-5b8b29a875ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "Stylish and functional for work or travel"
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect bag for every occasion, from elegant handbags to practical backpacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to="/shop" 
              className="group relative block h-96 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 group-hover:to-black/70 transition-all duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-xl font-playfair font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {category.description}
                  </p>
                  <span className="inline-block text-white border-b border-white pb-1 text-sm group-hover:text-soloni-gold group-hover:border-soloni-gold transition-colors">
                    Shop {category.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
