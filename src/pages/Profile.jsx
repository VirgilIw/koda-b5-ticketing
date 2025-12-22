import { useState } from "react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm h-[80vh]">
          <div className="flex justify-between items-center mb-6">
            <p className="text-sm font-medium text-gray-500">INFO</p>
            <span className="text-purple-600 font-bold">•••</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-24 h-24 rounded-full mb-4"
            />
            <h3 className="font-semibold text-gray-800">
              Jonas El Rodriguez
            </h3>
            <p className="text-sm text-gray-400 mb-6">Moviegoers</p>
          </div>
          <hr className="mb-6" />
          <p className="text-sm font-medium text-gray-500 mb-3">
            Loyalty Points
          </p>
          <div className="rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 p-4 text-white mb-4">
            <p className="text-sm">Moviegoers</p>
            <p className="text-2xl font-bold">320</p>
            <p className="text-xs">points</p>
          </div>
          <p className="text-xs text-gray-400 mb-2">
            180 points become a master
          </p>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-indigo-600" />
          </div>
        </div>
        <div className="lg:col-span-3 space-y-6">
          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-sm px-6">
            <div className="flex gap-8 border-b">
              <button className="py-4 text-indigo-600 font-medium border-b-2 border-indigo-600">
                Account Settings
              </button>
              <button className="py-4 text-gray-400">
                Order History
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-medium text-gray-500 mb-6">
              Details Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="First Name" value="Jonas" />
              <Input label="Last Name" value="El Rodriguez" />
              <Input label="E-mail" value="jonasrodriguez123@gmail.com" />
              <Input label="Phone Number" value="+62 81445687121" />
            </div>
          </div>
          {/* Account & Privacy */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h4 className="text-sm font-medium text-gray-500 mb-6">
              Account and Privacy
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PasswordInput label="New Password" placeholder="Write your password" />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
              />
            </div>
          </div>
          {/* Button */}
          <div className="flex justify-center">
            <button className="px-10 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Update changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, placeholder }) {
  return (
    <div>
      <label className="block text-sm text-gray-500 mb-2">
        {label}
      </label>
      <input
        defaultValue={value}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border border-gray-200
          px-4 py-3
          text-gray-700
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500
        "
      />
    </div>
  );
}

function PasswordInput({ label, placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="block text-sm text-gray-500 mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="
            w-full
            rounded-lg
            border border-gray-200
            px-4 py-3
            pr-12
            text-gray-700
            focus:outline-none
            focus:ring-2 focus:ring-indigo-500
          "
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}