export default function PaymentForm({ isLocked, onEdit }) {
  const inputClass = `
    w-full h-[45px] px-4 border border-gray-200 rounded-lg text-sm
    placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-400
    disabled:bg-gray-100 disabled:cursor-not-allowed
  `;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-full flex flex-col">

      {/* SHIPPING ADDRESS HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-orange-500 text-lg font-semibold">
          Shipping Address
        </h3>

        {isLocked && (
          <button
            onClick={onEdit}
            className="text-sm underline text-gray-700 hover:text-orange-500"
          >
            Edit
          </button>
        )}
      </div>

      {/* Address Line 1 & 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Address Line 1
          </label>
          <input
            disabled={isLocked}
            type="text"
            placeholder="Enter House no, flat no, etc"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Address Line 2
          </label>
          <input
            disabled={isLocked}
            type="text"
            placeholder="Enter Landmark, street, etc"
            className={inputClass}
          />
        </div>
      </div>

      {/* Postal / City / State */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Postal Code
          </label>
          <input
            disabled={isLocked}
            type="text"
            placeholder="Enter Postal Code"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            City
          </label>
          <input
            disabled={isLocked}
            type="text"
            placeholder="Enter City, Town"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            State
          </label>
          <input
            disabled={isLocked}
            type="text"
            placeholder="Enter State"
            className={inputClass}
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-3 mt-8">
        <input
          disabled={isLocked}
          type="checkbox"
          className="w-4 h-4 rounded border-gray-300 accent-orange-500"
        />
        <span className="text-sm text-gray-800">
          Make this as my default address
        </span>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* BASIC DETAILS HEADER */}
      <div className="flex items-center justify-between mb-5 mt-6">
        <h3 className="text-orange-500 text-lg font-semibold">
          Basic Details
        </h3>

        {isLocked && (
          <button
            onClick={onEdit}
            className="text-sm underline text-gray-700 hover:text-orange-500"
          >
            Edit
          </button>
        )}
      </div>

      {/* Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            First Name
          </label>
          <input
            disabled={isLocked}
            type="text"
            placeholder="Enter First Name"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Last Name
          </label>
          <input
            disabled={isLocked}
            type="text"
            placeholder="Enter Last name"
            className={inputClass}
          />
        </div>
      </div>

      {/* Mobile & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Mobile No.
          </label>
          <input
            disabled={isLocked}
            type="text"
            placeholder="Enter Mobile no."
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-2">
            Email
          </label>
          <input
            disabled={isLocked}
            type="email"
            placeholder="Enter Email"
            className={inputClass}
          />
        </div>
      </div>

    </div>
  );
}
