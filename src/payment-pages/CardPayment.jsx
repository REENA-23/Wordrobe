import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function CardPayment() {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full">

      {/* DELIVERY INFO */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex justify-between items-start mb-6">
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

      {/* BACK + TITLE */}
      <div className="flex items-center gap-2 mb-6">
        <button
  onClick={() => navigate(-1)}
  className="text-orange-500 text-xl hover:text-orange-600 transition"
>
  <IoChevronBack />
</button>

        <h3 className="text-base font-semibold">
          Credit Card or Debit Card
        </h3>
      </div>

      {/* CARD FORM */}
      <div className="w-full max-w-[620px] space-y-4 pb-70">

        {/* CARD NUMBER */}
        <input
          type="text"
          placeholder="Card Number"
          className="
            w-full
            h-[45px]
            px-4
            border
            border-gray-200
            rounded-lg
            text-sm
            focus:outline-none
            focus:border-orange-400
          "
        />

        {/* EXPIRY + CVV + PAY */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-4
            items-center
          "
        >
          <input
            type="text"
            placeholder="Valid Through"
            className="
              h-[45px]
              px-4
              border
              border-gray-200
              rounded-lg
              text-sm
              focus:outline-none
              focus:border-orange-400
            "
          />

          <input
            type="text"
            placeholder="CVV"
            className="
              h-[45px]
              px-4
              border
              border-gray-200
              rounded-lg
              text-sm
              focus:outline-none
              focus:border-orange-400
            "
          />

          <button
            className="
              h-[45px]
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              rounded-lg
              text-sm
              font-medium
            "
          >
            Pay ₹699
          </button>
        </div>

      </div>
    </div>
  );
}
