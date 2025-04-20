
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
import { Plus, Pencil, Trash2 } from "lucide-react";

// Sample data - in a real app, this would come from an API
const sampleProducts = [
  {
    id: 1,
    name: "Classic Leather Tote",
    price: 299.99,
    category: "Totes",
    stock: 23,
    status: "In Stock"
  },
  {
    id: 2,
    name: "Mini Crossbody Bag",
    price: 199.99,
    category: "Crossbody",
    stock: 15,
    status: "In Stock"
  },
  {
    id: 3,
    name: "Large Weekender",
    price: 399.99,
    category: "Travel",
    stock: 0,
    status: "Out of Stock"
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 249.99,
    category: "Backpacks",
    stock: 7,
    status: "Low Stock"
  },
  {
    id: 5,
    name: "Canvas Tote",
    price: 149.99,
    category: "Totes",
    stock: 42,
    status: "In Stock"
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Products</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>
      
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price.toFixed(2)}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(product.status)}`}>
                    {product.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 mr-2">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </Button>
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
