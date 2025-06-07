
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
import { Eye, IndianRupee, MapPin, Clock } from "lucide-react";

// Sample data with Indian locations and COD
const sampleOrders = [
  {
    id: "#ORD-001",
    customer: "Priya Sharma",
    items: 3,
    total: 8999,
    date: "2024-01-15",
    status: "Delivered",
    paymentMethod: "COD",
    location: "Mumbai, Maharashtra",
    deliveryTime: "2 days"
  },
  {
    id: "#ORD-002",
    customer: "Rahul Singh",
    items: 2,
    total: 4999,
    date: "2024-01-16",
    status: "Shipped",
    paymentMethod: "UPI",
    location: "Delhi, NCR",
    deliveryTime: "1 day"
  },
  {
    id: "#ORD-003",
    customer: "Anita Verma",
    items: 1,
    total: 2999,
    date: "2024-01-16",
    status: "Processing",
    paymentMethod: "Card",
    location: "Bangalore, Karnataka",
    deliveryTime: "3 days"
  },
  {
    id: "#ORD-004",
    customer: "Amit Kumar",
    items: 4,
    total: 7499,
    date: "2024-01-17",
    status: "Confirmed",
    paymentMethod: "COD",
    location: "Pune, Maharashtra",
    deliveryTime: "2 days"
  },
  {
    id: "#ORD-005",
    customer: "Sneha Patel",
    items: 2,
    total: 4499,
    date: "2024-01-18",
    status: "Cancelled",
    paymentMethod: "UPI",
    location: "Ahmedabad, Gujarat",
    deliveryTime: "-"
  }
];

const AdminOrders = () => {
  const [orders, setOrders] = useState(sampleOrders);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Confirmed":
        return "bg-purple-100 text-purple-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPaymentMethodClass = (method: string) => {
    switch (method) {
      case "COD":
        return "bg-orange-100 text-orange-800";
      case "UPI":
        return "bg-green-100 text-green-800";
      case "Card":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Orders</h2>
          <p className="text-gray-600 mt-1">Manage customer orders across India</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-green-600">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>COD Available</span>
          </div>
          <div className="flex items-center gap-1 text-blue-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>All India Delivery</span>
          </div>
        </div>
      </div>
      
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="font-semibold text-gray-700">Order Details</TableHead>
              <TableHead className="font-semibold text-gray-700">Customer</TableHead>
              <TableHead className="font-semibold text-gray-700">Amount</TableHead>
              <TableHead className="font-semibold text-gray-700">Payment</TableHead>
              <TableHead className="font-semibold text-gray-700">Status</TableHead>
              <TableHead className="font-semibold text-gray-700">Delivery</TableHead>
              <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="hover:bg-gray-50">
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-800">{order.id}</div>
                    <div className="text-sm text-gray-500">{order.items} items • {order.date}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-800">{order.customer}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{order.location}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="h-4 w-4 text-gray-600" />
                    <span className="font-medium text-gray-800">{order.total.toLocaleString('en-IN')}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentMethodClass(order.paymentMethod)}`}>
                    {order.paymentMethod}
                  </span>
                </TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="h-3 w-3" />
                    <span>{order.deliveryTime}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
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
