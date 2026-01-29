import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartNavbar from "../cart-pages/CartNavbar";
import PaymentSummary from "../cart-pages/PaymentSummary";
import PaymentForm from "./PaymentForm";
import Footer from "../home-pages/Footer";

export default function Payment() {
  const navigate = useNavigate();
  const [isLocked, setIsLocked] = useState(false);

  const handleMakePayment = () => {
    if (!isLocked) {
 
      setIsLocked(true);
    } else {

      navigate("/payment-method");
    }
  };

  return (
    <>
      <CartNavbar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <p className="text-sm text-gray-500 mb-4">
          Home / Add to cart
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2">
            <PaymentForm
              isLocked={isLocked}
              onEdit={() => setIsLocked(false)}
            />
          </div>

          {/* RIGHT */}
          <PaymentSummary onMakePayment={handleMakePayment} />
        </div>
      </div>

      <Footer />
    </>
  );
}
