import { useState } from "react";
import { useNavigate } from "react-router";

const Payment = () => {
  const [showDetailInfo, setDetailInfo] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const navigate = useNavigate()
  
  const paymentMethods = [
    { id: "gpay", img: "/src/assets/googlepay.png", alt: "Google Pay" },
    { id: "visa", img: "/src/assets/logos_visa.png", alt: "Visa" },
    { id: "gopay", img: "/src/assets/gopay.png", alt: "GoPay" },
    { id: "paypal", img: "/src/assets/paypal.png", alt: "Paypal" },
    { id: "dana", img: "/src/assets/dana.png", alt: "Dana" },
    { id: "bca", img: "/src/assets/bca.png", alt: "BCA" },
    { id: "bri", img: "/src/assets/bri.png", alt: "BRI" },
    { id: "ovo", img: "/src/assets/ovo.png", alt: "OVO" },
  ];

  const handlePaymentClick = (paymentId) => {
    setSelectedPayment(paymentId);
    setDetailInfo(true);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("12321320813829724");
    alert("Nomor rekening berhasil disalin!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailInfo(!showDetailInfo);
  };

  return (
    <section className="bg-slate-200 ">
      <section className="flex items-center justify-center gap-4 py-6 sm:gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-xs text-white sm:h-10 sm:w-10 sm:text-sm">
            ✓
          </div>
          <span className="text-[10px] text-gray-600 sm:text-sm">
            Dates & Time
          </span>
        </div>
        <div className="h-px w-8 border-t-2 border-dashed border-gray-400 sm:w-16"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-xs text-white sm:h-10 sm:w-10 sm:text-sm">
            ✓
          </div>
          <span className="text-[10px] text-gray-600 sm:text-sm">Seat</span>
        </div>
        <div className="h-px w-8 border-t-2 border-dashed border-gray-400 sm:w-16"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs text-white sm:h-10 sm:w-10 sm:text-sm">
            3
          </div>
          <span className="text-[10px] font-medium text-indigo-600 sm:text-sm">
            Payment
          </span>
        </div>
      </section>
      <section className="relative mx-auto w-[70vw] rounded-md bg-slate-50 p-3 md:w-[70vw]">
        <h1 className="p-2 py-4 text-2xl font-semibold">Payment Info</h1>
        <div className="border-b border-slate-300 p-2">
          <h2 className="py-1 font-light text-slate-500">DATE & TIME</h2>
          <p>tanggal</p>
        </div>
        <div className="border-b border-slate-300 p-2">
          <h2 className="py-1 font-light text-slate-500">MOVIE TITLE</h2>
          <p>movie name</p>
        </div>
        <div className="border-b border-slate-300 p-2">
          <h2 className="py-1 font-light text-slate-500">CINEMA NAME</h2>
          <p>cineOne21 Cinema</p>
        </div>
        <div className="border-b border-slate-300 p-2">
          <h2 className="py-1 font-light text-slate-500">NUMBER OF TICKETS</h2>
          <p>3 pieces</p>
        </div>
        <div className="border-b border-slate-300 p-2">
          <h2 className="py-1 font-light text-slate-500">TOTAL PAYMENT</h2>
          <p className="font-semibold text-blue-600">$20.00</p>
        </div>
        <h3 className="p-2 text-xl font-semibold">Personal Information</h3>
        {/*  */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 p-2 text-slate-500"
        >
          <label htmlFor="name" className="py-2 text-sm">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Koda free isa"
            className="rounded border border-slate-300 px-8 py-4"
            id="name"
          />
          <label htmlFor="email" className="py-2 text-sm">
            Email
          </label>
          <input
            type="text"
            placeholder="prabJoko@gmail.mega"
            className="rounded border border-slate-300 px-8 py-4"
            id="email"
          />
          <label htmlFor="number" className="py-2">
            Phone Number
          </label>
          <div className="flex items-center rounded border border-slate-300">
            <p className="border-r border-slate-300 px-8">+62</p>
            <input
              type="number"
              placeholder="08-xxx-xxx-xxx"
              className="overflow-x-hidden p-4 outline-none"
              id="email"
            />
          </div>
          <h3 className="mt-10 text-xl font-semibold text-black">
            Payment Method
          </h3>
          <section className="grid grid-cols-2 lg:grid lg:grid-cols-4">
            {paymentMethods.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type="radio"
                    name="payment"
                    id={item.id}
                    value={item.id}
                    className="peer hidden"
                    onChange={() => handlePaymentClick(item.id)}
                    checked={selectedPayment === item.id}
                  />
                  <label
                    htmlFor={item.id}
                    className="my-2 mr-2 flex h-2 cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-5 py-5 transition peer-checked:border-indigo-600 peer-checked:ring-2 peer-checked:ring-indigo-600 hover:border-indigo-500 lg:h-8"
                  >
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="max-h-8 object-contain"
                    />
                  </label>
                </div>
              );
            })}
          </section>
          <button
            type="submit"
            className="mt-4 cursor-pointer rounded bg-blue-600 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Pay your order
          </button>
        </form>
      </section>

      {/* Modal Popup - Seperti di gambar */}
      {showDetailInfo && (
        <>
          {/* Overlay Background */}
          <div
            className="fixed inset-0 z-40 bg-slate-900/60 bg-opacity-50"
            onClick={() => setDetailInfo(false)}
          ></div>

          {/* Modal Content */}
          <div className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="mb-6 text-center text-xl font-bold text-gray-800">
              Payment Info
            </h2>

            {/* Virtual Account Section */}
            <div className="mb-4">
              <p className="mb-2 text-sm text-gray-500">Va. Rekening Virtual</p>
              <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3">
                <span className="text-lg font-bold tracking-wide text-gray-800">
                  12321320813829724
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="rounded-md border border-blue-600 px-4 py-1 text-sm font-medium text-indigo-600 transition hover:bg-indigo-50"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Total Payment Section */}
            <div className="mb-6 flex justify-between pr-4">
              <p className="mb-2 text-sm text-gray-500">Total Payment</p>
              <p className="text-2xl font-bold text-blue-600">$39</p>
            </div>

            {/* Warning Text */}
            <p className="mb-6 text-xs text-gray-600">
              Pay this payment bill before <span className="font-semibold text-red-600">in June 25, 2023</span>. If the bill has not been paid by the specified time, it will be forfeited
            </p>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setDetailInfo(false);
                  navigate("/ticket-result")
                }}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Check Payment
              </button>
              <button
                type="button"
                onClick={() => setDetailInfo(false)}
                className="w-full rounded-lg border border-gray-300 bg-white py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Pay Later
              </button>
            </div>
          </div>
        </>
      )}

      <section className="h-15"></section>
    </section>
  );
};

export default Payment;