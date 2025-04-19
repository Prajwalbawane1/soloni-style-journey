
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard } from "lucide-react";

const Payment = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState<{
    product: Product;
    quantity: number;
    shippingAddress: any;
  } | null>(null);

  useEffect(() => {
    const orderData = localStorage.getItem("orderDetails");
    if (!orderData) {
      navigate("/checkout");
      return;
    }
    setOrderDetails(JSON.parse(orderData));
  }, [navigate]);

  if (!orderDetails) return null;

  const totalPrice = orderDetails.product.price * orderDetails.quantity;

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-playfair font-bold mb-8">Payment</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>Total to pay: ${totalPrice.toFixed(2)}</p>
              <Button className="w-full bg-soloni-gold hover:bg-soloni-gold/90">
                Pay Now
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={orderDetails.product.image}
                  alt={orderDetails.product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-medium">{orderDetails.product.name}</h3>
                  <p className="text-gray-500">Quantity: {orderDetails.quantity}</p>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between font-medium text-lg border-t pt-2">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Payment;
