export default function TicketResult() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">

      <div
        className="relative flex items-center bg-cover bg-center bg-[url('/src/assets/Group-9.png')] bg-cover"
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-10 max-w-xl text-white">
          <h1 className="text-4xl font-bold mb-3">
            Tickitz<span className="text-blue-400">.</span>
          </h1>

          <h2 className="text-2xl font-semibold mb-4">
            Thank You For Purchasing
          </h2>

          <p className="text-white/80 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Quam pretium pretium tempor
            integer sed magna et.
          </p>

          <p className="text-sm text-white/60">
            Please download your ticket
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center bg-slate-200 p-6">
        <div className="w-full max-w-sm rounded-2xl bg-white/80 backdrop-blur-md shadow-xl p-6 overflow-hidden">

          {/* QR */}
          <div className="flex justify-center mb-6">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=Tickitz"
              alt="QR Code"
              className="w-40 h-40"
            />
          </div>
          <div className="flex justify-between">
            <p className="w-10 h-9 rounded-full bg-slate-200 -translate-x-9.5"></p>
            <p className="text-slate-300 w-full">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - </p>
            <p className="w-10 h-9 rounded-full bg-slate-200 -translate-x-[-38px]"></p>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Movie</span>
              <span className="font-semibold text-gray-800">Spider-Man</span>
            </div>
            <div className="flex justify-between">
              <span>Category</span>
              <span className="font-semibold text-gray-800">PG-13</span>
            </div>
            <div className="flex justify-between">
              <span>Date</span>
              <span className="font-semibold text-gray-800">07 Jul</span>
            </div>
            <div className="flex justify-between">
              <span>Time</span>
              <span className="font-semibold text-gray-800">2:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Seats</span>
              <span className="font-semibold text-gray-800">C4, C5, C6</span>
            </div>
          </div>

          {/* divider */}
          <div className="my-4 border-t border-dashed" />

          {/* total */}
          <div className="flex justify-between items-center mb-6">
            <span className="font-medium text-gray-700">Total</span>
            <span className="text-lg font-bold text-gray-900">$30.00</span>
          </div>

          {/* buttons */}
          <button className="w-full mb-3 rounded-lg border border-blue-600 py-2 text-blue-600 transition hover:bg-blue-50">
            Download
          </button>

          <button className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
