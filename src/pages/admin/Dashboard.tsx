
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShoppingBag, IndianRupee, TrendingUp, MapPin, Truck } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600 bg-green-50 px-3 py-1 rounded-full">
          <MapPin className="h-4 w-4 text-green-600" />
          <span className="text-green-600 font-medium">India Market</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <IndianRupee className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">₹45,23,189</div>
            <p className="text-xs text-green-600 font-medium">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">New Orders</CardTitle>
            <ShoppingBag className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">2,350</div>
            <p className="text-xs text-blue-600 font-medium">
              +10.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">New Customers</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">573</div>
            <p className="text-xs text-purple-600 font-medium">
              +12.7% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Users</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">753</div>
            <p className="text-xs text-orange-600 font-medium">
              +3.2% from last hour
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IndianRupee className="h-5 w-5 text-green-600" />
              Recent Sales
            </CardTitle>
            <CardDescription>
              You made 265 sales this month across India.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <span className="text-pink-600 font-medium">P</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Priya Sharma</p>
                    <p className="text-sm text-gray-500">Mumbai, Maharashtra</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800">₹1,999</div>
                  <div className="text-xs text-gray-500">2 items</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-medium">R</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Rahul Singh</p>
                    <p className="text-sm text-gray-500">Delhi, NCR</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800">₹1,499</div>
                  <div className="text-xs text-gray-500">1 item</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-medium">A</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Anita Verma</p>
                    <p className="text-sm text-gray-500">Bangalore, Karnataka</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800">₹2,299</div>
                  <div className="text-xs text-gray-500">3 items</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-blue-600" />
              Top Selling Products
            </CardTitle>
            <CardDescription>
              Best performers in Indian market this month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-orange-100 flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Luxury Leather Tote</p>
                    <p className="text-sm text-gray-500">38 sales this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800">₹2,999</div>
                  <div className="text-xs text-green-600">Top Seller</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-pink-100 flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Classic Crossbody</p>
                    <p className="text-sm text-gray-500">24 sales this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800">₹1,999</div>
                  <div className="text-xs text-blue-600">Trending</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-purple-100 flex items-center justify-center">
                    <ShoppingBag className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Mini Backpack</p>
                    <p className="text-sm text-gray-500">19 sales this month</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-800">₹1,499</div>
                  <div className="text-xs text-purple-600">Popular</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
