
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShoppingBag, DollarSign, TrendingUp } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +10.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +12.7% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+753</div>
            <p className="text-xs text-muted-foreground">
              +3.2% from last hour
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>
              You made 265 sales this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Placeholder for recent sales data */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Olivia Martin</p>
                  <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                </div>
                <div className="font-medium">+$1,999.00</div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Jackson Lee</p>
                  <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                </div>
                <div className="font-medium">+$1,499.00</div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Isabella Nguyen</p>
                  <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                </div>
                <div className="font-medium">+$1,299.00</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Popular Products</CardTitle>
            <CardDescription>
              Top selling products this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Placeholder for popular products */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded bg-gray-200 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Luxury Tote</p>
                  <p className="text-sm text-muted-foreground">38 sales</p>
                </div>
                <div className="font-medium">$299.00</div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded bg-gray-200 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Classic Crossbody</p>
                  <p className="text-sm text-muted-foreground">24 sales</p>
                </div>
                <div className="font-medium">$199.00</div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded bg-gray-200 mr-3"></div>
                <div className="flex-1">
                  <p className="font-medium">Mini Backpack</p>
                  <p className="text-sm text-muted-foreground">19 sales</p>
                </div>
                <div className="font-medium">$149.00</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
