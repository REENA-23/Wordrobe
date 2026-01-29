import { useLocation } from "react-router-dom";

import CartNavbar from "../cart-pages/CartNavbar";
import PaymentSummary from "../cart-pages/PaymentSummary";
import PaymentMethod from "./PaymentMethod";
import UPIPayment from "./UPIPayment";
import CardPayment from "./CardPayment";
import Footer from "../home-pages/Footer";

export default function PaymentMethodPage() {
  const location = useLocation();
  const path = location.pathname;

  const isUpiPage = path === "/payment-method/upi";
  const isCardPage = path === "/payment-method/card";

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
            {!isUpiPage && !isCardPage && <PaymentMethod />}
            {isUpiPage && <UPIPayment />}
            {isCardPage && <CardPayment />}
          </div>

          {/* RIGHT */}
          <div>
            <PaymentSummary />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}
