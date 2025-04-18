
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "https://www.instagram.com/"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "https://www.instagram.com/"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    link: "https://www.instagram.com/"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1576431189926-7ddb5fc683c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "https://www.instagram.com/"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    link: "https://www.instagram.com/"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "https://www.instagram.com/"
  }
];

const InstagramSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Follow Our Journey</h2>
          <div className="flex items-center justify-center space-x-2">
            <Instagram size={20} className="text-soloni-gold" />
            <p className="text-gray-600">@solonibags</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative aspect-square rounded-md overflow-hidden"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-soloni-gold/0 flex items-center justify-center opacity-0 group-hover:bg-soloni-gold/20 group-hover:opacity-100 transition-all duration-300">
                <Instagram size={24} className="text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
