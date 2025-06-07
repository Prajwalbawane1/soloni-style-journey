
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
import { User, Mail, Calendar, Shield, Edit, UserX, MapPin, IndianRupee } from "lucide-react";

// Sample data with Indian customer details
const sampleUsers = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya.sharma@gmail.com",
    role: "Customer",
    joined: "2023-01-15",
    status: "Active",
    location: "Mumbai, Maharashtra",
    totalSpent: 25999,
    orders: 8
  },
  {
    id: 2,
    name: "Rahul Singh",
    email: "rahul.singh@yahoo.com",
    role: "Customer",
    joined: "2023-03-22",
    status: "Active",
    location: "Delhi, NCR",
    totalSpent: 18750,
    orders: 5
  },
  {
    id: 3,
    name: "Anita Verma",
    email: "anita.verma@hotmail.com",
    role: "Customer",
    joined: "2023-05-10",
    status: "Inactive",
    location: "Bangalore, Karnataka",
    totalSpent: 12500,
    orders: 3
  },
  {
    id: 4,
    name: "Admin User",
    email: "admin@solonibags.com",
    role: "Admin",
    joined: "2023-01-01",
    status: "Active",
    location: "Head Office",
    totalSpent: 0,
    orders: 0
  },
  {
    id: 5,
    name: "Sneha Patel",
    email: "sneha.patel@gmail.com",
    role: "Customer",
    joined: "2023-09-18",
    status: "Active",
    location: "Ahmedabad, Gujarat",
    totalSpent: 31200,
    orders: 12
  }
];

const AdminUsers = () => {
  const [users, setUsers] = useState(sampleUsers);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleClass = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-100 text-purple-800";
      case "Support":
        return "bg-blue-100 text-blue-800";
      case "Customer":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCustomerTier = (totalSpent: number) => {
    if (totalSpent >= 30000) return { tier: "Premium", class: "text-yellow-600" };
    if (totalSpent >= 15000) return { tier: "Gold", class: "text-orange-600" };
    if (totalSpent >= 5000) return { tier: "Silver", class: "text-gray-600" };
    return { tier: "Bronze", class: "text-amber-600" };
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Customers</h2>
          <p className="text-gray-600 mt-1">Manage your customer base across India</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <User className="mr-2 h-4 w-4" /> Add Customer
        </Button>
      </div>
      
      <Card className="overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="font-semibold text-gray-700">Customer</TableHead>
              <TableHead className="font-semibold text-gray-700">Contact</TableHead>
              <TableHead className="font-semibold text-gray-700">Role</TableHead>
              <TableHead className="font-semibold text-gray-700">Location</TableHead>
              <TableHead className="font-semibold text-gray-700">Purchase History</TableHead>
              <TableHead className="font-semibold text-gray-700">Status</TableHead>
              <TableHead className="text-right font-semibold text-gray-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              const tierInfo = getCustomerTier(user.totalSpent);
              return (
                <TableRow key={user.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{user.name}</div>
                        <div className="text-sm text-gray-500">Joined {user.joined}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="text-sm text-gray-800">{user.email}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                        <Mail className="h-3 w-3" />
                        <span>Email verified</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleClass(user.role)}`}>
                      {user.role}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{user.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {user.role === "Customer" ? (
                      <div>
                        <div className="flex items-center gap-1">
                          <IndianRupee className="h-3 w-3 text-gray-600" />
                          <span className="font-medium text-gray-800">{user.totalSpent.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{user.orders} orders</span>
                          <span className={`text-xs font-medium ${tierInfo.class}`}>
                            {tierInfo.tier}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-sm text-gray-400">N/A</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(user.status)}`}>
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50">
                        <UserX className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminUsers;
