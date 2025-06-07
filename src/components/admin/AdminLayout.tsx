
import { 
  Sidebar, 
  SidebarProvider, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  Settings,
  IndianRupee
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (path === '/admin/dashboard' && location.pathname === '/admin');
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="flex items-center justify-center py-4 border-b">
            <div className="flex items-center gap-2">
              <IndianRupee className="h-6 w-6 text-orange-500" />
              <h1 className="text-xl font-bold text-gray-800">SoloniBags India</h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link 
                    to="/admin/dashboard" 
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive('/admin/dashboard') 
                        ? 'bg-orange-100 text-orange-600 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link 
                    to="/admin/products" 
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive('/admin/products') 
                        ? 'bg-orange-100 text-orange-600 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Package className="h-4 w-4" />
                    <span>Products</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link 
                    to="/admin/orders" 
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive('/admin/orders') 
                        ? 'bg-orange-100 text-orange-600 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Orders</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link 
                    to="/admin/users" 
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive('/admin/users') 
                        ? 'bg-orange-100 text-orange-600 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Users className="h-4 w-4" />
                    <span>Customers</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link 
                    to="/admin/settings" 
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive('/admin/settings') 
                        ? 'bg-orange-100 text-orange-600 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 text-xs text-center text-gray-500 border-t">
            <div className="flex items-center justify-center gap-1">
              <IndianRupee className="h-3 w-3" />
              <span>SoloniBags India Admin v1.0.0</span>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 flex flex-col bg-gray-50">
          <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-gray-600 hover:text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <IndianRupee className="h-4 w-4" />
              <span>India Market</span>
            </div>
          </div>
          <div className="flex-1 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
