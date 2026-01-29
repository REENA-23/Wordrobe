export default function PaySec () {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      
      {/* DELIVERY INFO */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex justify-between items-start">
        <div>
          <p className="text-sm font-medium">
            Delivering to Dhara Keshwala
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Lorem ipsum dolor sit amet, lorem ipsum,
            PORBANDAR, GUJARAT, 360579, India
          </p>
        </div>

        <button className="text-sm underline text-gray-700 hover:text-orange-500">
          Edit Address
        </button>
      </div>

      {/* PAYMENT METHOD */}
      <h3 className="text-base font-semibold mt-6 mb-4">
        Choose Payment Method
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <button className="h-[45px] border border-orange-400 bg-orange-50 rounded-lg text-sm font-medium text-left px-4">
          UPI
        </button>

        <button className="h-[45px] border rounded-lg text-sm text-left px-4">
          Credit Card or Debit Card
        </button>

        <button className="h-[45px] border rounded-lg text-sm text-left px-4">
          EMI
        </button>

        <button className="h-[45px] border rounded-lg text-sm text-left px-4">
          Cash on Delivery
        </button>

      </div>
    </div>
  );
}
