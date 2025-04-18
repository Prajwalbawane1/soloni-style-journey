
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "The quality and craftsmanship of my SoloniBag is exceptional. I get compliments every time I carry it!",
    name: "Emma Thompson",
    title: "Fashion Blogger",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    quote: "I've owned several luxury bags, but my SoloniBag combines style and functionality like no other. It's now my everyday essential.",
    name: "Sarah Johnson",
    title: "Marketing Executive",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    quote: "The attention to detail is incredible. SoloniBags aren't just accessories; they're investments that stand the test of time.",
    name: "Michelle Rodriguez",
    title: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-soloni-beige/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our valued customers who have experienced the quality and elegance of SoloniBags.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="absolute -top-5 left-10 text-soloni-gold">
              <Quote size={40} strokeWidth={1} />
            </div>

            <div className="flex flex-col md:flex-row items-center md:space-x-8">
              <div className="mb-6 md:mb-0 md:w-1/3 flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full border-4 border-soloni-pink overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-gray-700 italic text-lg mb-6">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col">
                  <span className="font-playfair font-bold text-xl">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="text-gray-500">
                    {testimonials[currentIndex].title}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-soloni-gold" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
              <button
                onClick={prev}
                className="bg-white rounded-full shadow-md p-2 hover:bg-soloni-gold hover:text-white transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
              <button
                onClick={next}
                className="bg-white rounded-full shadow-md p-2 hover:bg-soloni-gold hover:text-white transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
