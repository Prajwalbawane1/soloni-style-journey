
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types";
import { CreditCard, Truck, ImageOff } from "lucide-react";
import { useState } from "react";

interface OrderSummaryProps {
  product: Product;
  quantity: string;
  onQuantityChange: (value: string) => void;
  onProceedToPayment: () => void;
}

const OrderSummary = ({
  product,
  quantity,
  onQuantityChange,
  onProceedToPayment,
}: OrderSummaryProps) => {
  const totalPrice = Number(quantity) * product.price;
  const [imageError, setImageError] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            {imageError ? (
              <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded">
                <ImageOff className="h-6 w-6 text-gray-400" />
              </div>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
                onError={() => setImageError(true)}
              />
            )}
            <div className="flex-1">
              <h3 className="font-medium">{product.name}</h3>
              <div className="flex items-center gap-4 mt-2">
                <Label htmlFor="quantity">Quantity:</Label>
                <Select value={quantity} onValueChange={onQuantityChange}>
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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

          <Button 
            className="w-full bg-soloni-gold hover:bg-soloni-gold/90"
            onClick={onProceedToPayment}
          >
            <CreditCard className="mr-2 h-4 w-4" />
            Proceed to Payment
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-500 justify-center">
            <Truck className="h-4 w-4" />
            <span>Free shipping on all orders</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
