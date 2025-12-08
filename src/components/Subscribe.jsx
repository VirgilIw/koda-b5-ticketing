// components/Newsletter.jsx
const Subscribe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section className="flex justify-center py-16">
      <div className="w-[60vw] md:w-[70vw] lg:w-[70vw] relative bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute bottom-0 right-0 w-40 h-40 border-3 border-white rounded-full translate-x-20 translate-y-25"></div>
        <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-10 -translate-y-10"></div>

        <div className="relative z-10 py-16 px-8 md:px-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Subscribe to our newsletter
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center md:items-center max-w-3xl mx-auto"
          >
            <input
              type="text"
              placeholder="First name"
              className="md:w-[15vw] lg:w-[20vw] px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email address"
              className="md:w-[15vw] px-6 py-3 rounded-lg bg-transparent border-2 border-white text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="md:w-[25vw] md:text-md px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
