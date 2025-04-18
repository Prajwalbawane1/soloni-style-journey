
import { Product } from "@/types";

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "The Elegant Tote",
    description: "A sophisticated tote bag perfect for everyday use. Crafted from premium leather with ample space for all your essentials.",
    price: 249.99,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    images: [
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1576431189926-7ddb5fc683c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    category: "Tote",
    isNew: true,
    isBestseller: true,
    colors: ["Black", "Tan", "Navy"],
    materials: ["Full-grain leather"],
    rating: 4.8,
    reviews: 124,
    stock: 15,
    features: [
      "Premium full-grain leather",
      "Spacious interior",
      "Durable lining",
      "Magnetic closure",
      "Interior zip pocket"
    ]
  },
  {
    id: 2,
    name: "The Crossbody Classic",
    description: "A versatile crossbody bag that transitions effortlessly from day to night. Sleek design with adjustable strap.",
    price: 179.99,
    oldPrice: 199.99,
    image: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    images: [
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
    ],
    category: "Crossbody",
    isNew: false,
    isBestseller: true,
    colors: ["Blush Pink", "Black", "Caramel"],
    materials: ["Smooth leather"],
    rating: 4.6,
    reviews: 89,
    stock: 10,
    features: [
      "Smooth genuine leather",
      "Adjustable crossbody strap",
      "Gold-tone hardware",
      "Zippered main compartment",
      "Card slots and slip pockets"
    ]
  },
  {
    id: 3,
    name: "The Minimalist Clutch",
    description: "An elegant clutch for special occasions. Clean lines and sophisticated design make this the perfect evening companion.",
    price: 129.99,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
    images: [
      "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    ],
    category: "Clutch",
    isNew: false,
    isBestseller: false,
    colors: ["Gold", "Silver", "Black"],
    materials: ["Satin", "Metal"],
    rating: 4.7,
    reviews: 64,
    stock: 8,
    features: [
      "Luxurious satin exterior",
      "Detachable chain strap",
      "Magnetic clasp closure",
      "Interior slip pocket",
      "Signature lining"
    ]
  },
  {
    id: 4,
    name: "The Urban Backpack",
    description: "A stylish yet functional backpack for the modern woman on the go. Combines fashion and practicality.",
    price: 189.99,
    oldPrice: 229.99,
    image: "https://images.unsplash.com/photo-1581605405298-5b8b29a875ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    images: [
      "https://images.unsplash.com/photo-1581605405298-5b8b29a875ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    category: "Backpack",
    isNew: true,
    isBestseller: false,
    colors: ["Olive Green", "Black", "Navy"],
    materials: ["Canvas", "Leather trim"],
    rating: 4.9,
    reviews: 57,
    stock: 12,
    features: [
      "Durable canvas with leather trim",
      "Padded laptop sleeve (fits up to 15\")",
      "Multiple compartments",
      "Adjustable shoulder straps",
      "Water-resistant exterior"
    ]
  },
  {
    id: 5,
    name: "The Structured Satchel",
    description: "A timeless satchel with a structured silhouette. Perfect for work or weekend outings.",
    price: 219.99,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    images: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
    ],
    category: "Satchel",
    isNew: false,
    isBestseller: true,
    colors: ["Cognac", "Black", "Burgundy"],
    materials: ["Full-grain leather"],
    rating: 4.5,
    reviews: 92,
    stock: 7,
    features: [
      "Premium full-grain leather",
      "Structured silhouette",
      "Dual top handles",
      "Detachable shoulder strap",
      "Multiple interior compartments"
    ]
  },
  {
    id: 6,
    name: "The Weekender Duffle",
    description: "The perfect companion for weekend getaways. Spacious, stylish, and built to last.",
    price: 279.99,
    oldPrice: 299.99,
    image: "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    images: [
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1581605405298-5b8b29a875ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
    ],
    category: "Travel",
    isNew: true,
    isBestseller: false,
    colors: ["Tan", "Black", "Navy"],
    materials: ["Canvas", "Leather trim"],
    rating: 4.7,
    reviews: 48,
    stock: 5,
    features: [
      "Durable canvas with leather trim",
      "Spacious main compartment",
      "Reinforced handles",
      "Removable shoulder strap",
      "External zip pocket"
    ]
  },
  {
    id: 7,
    name: "The Envelope Clutch",
    description: "A sleek envelope clutch that adds the perfect finishing touch to any outfit. Elegant and versatile.",
    price: 99.99,
    oldPrice: 129.99,
    image: "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    images: [
      "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    category: "Clutch",
    isNew: false,
    isBestseller: false,
    colors: ["Blush Pink", "Black", "White"],
    materials: ["Leather"],
    rating: 4.4,
    reviews: 36,
    stock: 9,
    features: [
      "Soft genuine leather",
      "Envelope design with magnetic closure",
      "Interior slip pocket",
      "Optional wristlet strap",
      "Signature lining"
    ]
  },
  {
    id: 8,
    name: "The Mini Bucket Bag",
    description: "A charming mini bucket bag that's perfect for carrying your essentials. On-trend and practical.",
    price: 159.99,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1576431189926-7ddb5fc683c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
    ],
    category: "Bucket Bag",
    isNew: true,
    isBestseller: true,
    colors: ["Mustard", "Black", "Taupe"],
    materials: ["Pebbled leather"],
    rating: 4.8,
    reviews: 72,
    stock: 14,
    features: [
      "Soft pebbled leather",
      "Drawstring closure",
      "Adjustable crossbody strap",
      "Interior zip pocket",
      "Gold-tone hardware"
    ]
  },
  {
    id: 9,
    name: "The Statement Shoulder Bag",
    description: "Make a statement with this bold shoulder bag. Eye-catching design with practical features.",
    price: 199.99,
    oldPrice: 249.99,
    image: "https://images.unsplash.com/photo-1576431189926-7ddb5fc683c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    images: [
      "https://images.unsplash.com/photo-1576431189926-7ddb5fc683c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1575032617751-6ddec2089882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    category: "Shoulder Bag",
    isNew: false,
    isBestseller: false,
    colors: ["Red", "Black", "Royal Blue"],
    materials: ["Leather"],
    rating: 4.6,
    reviews: 45,
    stock: 6,
    features: [
      "Premium leather",
      "Bold hardware accents",
      "Adjustable shoulder strap",
      "Multiple interior compartments",
      "Secure zip closure"
    ]
  }
];

export const allProducts = [...featuredProducts];

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find(product => product.id === id);
};
