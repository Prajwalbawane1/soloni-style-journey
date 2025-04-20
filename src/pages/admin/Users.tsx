
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
import { User, Mail, Calendar, Shield, Edit, UserX } from "lucide-react";

// Sample data - in a real app, this would come from an API
const sampleUsers = [
  {
    id: 1,
    name: "Alice Cooper",
    email: "alice.cooper@example.com",
    role: "Admin",
    joined: "2023-01-15",
    status: "Active"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "Customer",
    joined: "2023-03-22",
    status: "Active"
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    role: "Customer",
    joined: "2023-05-10",
    status: "Inactive"
  },
  {
    id: 4,
    name: "Diana Evans",
    email: "diana.evans@example.com",
    role: "Support",
    joined: "2023-07-05",
    status: "Active"
  },
  {
    id: 5,
    name: "Ethan Wright",
    email: "ethan.wright@example.com",
    role: "Customer",
    joined: "2023-09-18",
    status: "Active"
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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Users</h2>
        <Button>
          <User className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>
      
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <User className="h-4 w-4 text-gray-500" />
                    </div>
                    {user.name}
                  </div>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${getRoleClass(user.role)}`}>
                    {user.role}
                  </span>
                </TableCell>
                <TableCell>{user.joined}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(user.status)}`}>
                    {user.status}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 mr-2">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                    <UserX className="h-4 w-4" />
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

export default AdminUsers;
