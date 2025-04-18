
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number | null;
  image: string;
  images: string[];
  category: string;
  isNew: boolean;
  isBestseller: boolean;
  colors: string[];
  materials: string[];
  rating: number;
  reviews: number;
  stock: number;
  features: string[];
}
