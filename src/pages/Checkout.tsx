
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/types";
import ShippingAddressForm from "@/components/checkout/ShippingAddressForm";
import OrderSummary from "@/components/checkout/OrderSummary";

const Checkout = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState("1");
  const [shippingAddress, setShippingAddress] = useState({
    fullName: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const storedProduct = localStorage.getItem("buyNowProduct");
    if (!storedProduct) {
      navigate("/shop");
      return;
    }
    setProduct(JSON.parse(storedProduct));
  }, [navigate]);

  const handleQuantityChange = (value: string) => {
    setQuantity(value);
  };

  const handleProceedToPayment = () => {
    const orderDetails = {
      product,
      quantity: Number(quantity),
      shippingAddress
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    navigate("/payment");
  };

  if (!product) return null;

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-playfair font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ShippingAddressForm
            shippingAddress={shippingAddress}
            onAddressChange={handleInputChange}
          />
        </div>
        <div>
          <OrderSummary
            product={product}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
            onProceedToPayment={handleProceedToPayment}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
