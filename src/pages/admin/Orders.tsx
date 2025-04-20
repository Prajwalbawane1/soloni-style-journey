
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
import { Eye } from "lucide-react";

// Sample data - in a real app, this would come from an API
const sampleOrders = [
  {
    id: "#ORD-001",
    customer: "Sarah Johnson",
    items: 3,
    total: 899.97,
    date: "2023-10-15",
    status: "Completed"
  },
  {
    id: "#ORD-002",
    customer: "Michael Chen",
    items: 2,
    total: 499.98,
    date: "2023-10-16",
    status: "Processing"
  },
  {
    id: "#ORD-003",
    customer: "Emma Williams",
    items: 1,
    total: 299.99,
    date: "2023-10-16",
    status: "Pending Payment"
  },
  {
    id: "#ORD-004",
    customer: "John Smith",
    items: 4,
    total: 749.96,
    date: "2023-10-17",
    status: "Shipped"
  },
  {
    id: "#ORD-005",
    customer: "Lisa Brown",
    items: 2,
    total: 449.98,
    date: "2023-10-18",
    status: "Cancelled"
  }
];

const AdminOrders = () => {
  const [orders, setOrders] = useState(sampleOrders);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-blue-100 text-blue-800";
      case "Pending Payment":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-purple-100 text-purple-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Orders</h2>
      
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
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

export default AdminOrders;
