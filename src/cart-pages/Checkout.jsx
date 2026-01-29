import { useNavigate } from "react-router-dom";
import CartItem from "../cart-pages/CartItem";
import PaymentSummary from "../cart-pages/PaymentSummary";
import TrendingItems from "../cart-pages/TrendingItems";
import CartNavbar from "./CartNavbar";
import Footer from "../home-pages/Footer";

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div>
      <CartNavbar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          Home / Add to cart
        </p>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <CartItem />
            <hr className="my-6" />
            <CartItem />
          </div>

          {/* RIGHT SIDE */}
          <PaymentSummary
            onMakePayment={() => navigate("/payment")}
          />
        </div>
      </div>

      <TrendingItems />
      <Footer />
    </div>
  );
}
