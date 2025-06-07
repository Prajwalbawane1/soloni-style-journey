
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Plus, Pencil, Trash2, IndianRupee, Star } from "lucide-react";

// Sample data with Indian pricing
const sampleProducts = [
  {
    id: 1,
    name: "Classic Leather Tote",
    price: 2999,
    originalPrice: 3999,
    category: "Handbags",
    stock: 23,
    status: "In Stock",
    rating: 4.5,
    sales: 156
  },
  {
    id: 2,
    name: "Mini Crossbody Bag",
    price: 1999,
    originalPrice: 2499,
    category: "Crossbody",
    stock: 15,
    status: "In Stock",
    rating: 4.7,
    sales: 89
  },
  {
    id: 3,
    name: "Large Travel Tote",
    price: 3999,
    originalPrice: 4999,
    category: "Travel",
    stock: 0,
    status: "Out of Stock",
    rating: 4.3,
    sales: 67
  },
  {
    id: 4,
    name: "Leather Office Bag",
    price: 2499,
    originalPrice: 2999,
    category: "Office",
    stock: 7,
    status: "Low Stock",
    rating: 4.6,
    sales: 134
  },
  {
    id: 5,
    name: "Canvas Casual Tote",
    price: 1499,
    originalPrice: 1999,
    category: "Casual",
    stock: 42,
    status: "In Stock",
    rating: 4.2,
    sales: 203
  }
];

const AdminProducts = () => {
  const [products, setProducts] = useState(sampleProducts);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-800";
      case "Out of Stock":
        return "bg-red-100 text-red-800";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDiscountPercentage = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Products</h2>
          <p className="text-gray-600 mt-1">Manage your product catalog for Indian market</p>
        </div>
        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>
      
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="font-semibold text-gray-700">Product</TableHead>
              <TableHead className="font-semibold text-gray-700">Category</TableHead>
              <TableHead className="font-semibold text-gray-700">Price</TableHead>
              <TableHead className="font-semibold text-gray-700">Stock</TableHead>
              <TableHead className="font-semibold text-gray-700">Status</TableHead>
              <TableHead className="font-semibold text-gray-700">Performance</TableHead>
              <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id} className="hover:bg-gray-50">
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-800">{product.name}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-500">{product.rating}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {product.category}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="h-3 w-3 text-gray-600" />
                    <span className="font-medium text-gray-800">{product.price.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <IndianRupee className="h-2 w-2 text-gray-400" />
                    <span className="text-xs text-gray-400 line-through">{product.originalPrice.toLocaleString('en-IN')}</span>
                    <span className="text-xs text-green-600 font-medium">
                      {getDiscountPercentage(product.price, product.originalPrice)}% OFF
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="font-medium text-gray-800">{product.stock}</span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(product.status)}`}>
                    {product.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="text-sm text-gray-600">
                    <div>{product.sales} sales</div>
                    <div className="text-xs text-gray-400">this month</div>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminProducts;
