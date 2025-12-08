import FetchMovies from "../components/FetchMovies";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <>
      {/* ## Hero Section */}
      <section className="flex flex-col md:grid md:grid-cols-2 mt-10 px-10">
        <div className="mt-10 text-center md:text-start md:w-[45vw] pl-[2%]">
          <h1 className="mb-4 text-[#1D4ED8] font-semibold ">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h1>
          <h2 className="text-xl md:text-4xl lg:text-5xl leading-[1.5em]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h2>
          <p>
            Sign up and get the ticket with a lot of <br /> discount
          </p>
        </div>

        <section className="flex justify-center md:grid md:grid-cols-2 md:absolute md:right-12 lg:right-16 text-center mt-5 md:mt-0 gap-2 md:w-80 md:mx-auto">
          <div className="md:flex md:flex-col gap-2">
            <img
              src="/src/assets/john wicked.png"
              alt="john wicked"
              className="pb-2 md:pb-0"
            />
            <img src="/src/assets/spiderman.png" alt="spiderman" />
          </div>
          <div className="md:flex md:flex-col gap-2">
            <img
              src="/src/assets/lion king.png"
              alt="lion king"
              className="pb-2 md:pb-0"
            />
            <img src="/src/assets/roblox.png" alt="roblox" />
          </div>
        </section>
      </section>

      {/* ## Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-lg p-8 md:p-12">
          {/* ### Header */}
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Unleashing the Ultimate Movie Experience
            </h2>
          </div>

          {/*  Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Guaranteed
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec.
              </p>
            </div>

            {/*  Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Affordable
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit.
              </p>
            </div>

            {/*  Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                24/7 Customer Support
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipis elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ## Movies Section Header */}
      <section className="flex flex-col justify-center items-center mb-8">
        <h3 className="text-[#1D4ED8] font-semibold uppercase tracking-wider text-sm">
          MOVIES
        </h3>
        <p className="text-2xl md:text-3xl text-center font-semibold text-gray-900 mt-2">
          Exciting Movies That Should Be <br /> Watched Today
        </p>
      </section>

      {/* ## Movies Section */}
      <section className="flex flex-col justify-center items-center">
        <FetchMovies />
        <button className="w-[90vw] flex justify-center text-[#1D4ED8] py-12 cursor-pointer">
          View All {`->`}
        </button>
      </section>

      {/* ## Upcoming Movies */}
      <section className="grid grid-cols-2 pt-2 px-10">
        <div>
          <p className="text-[#1D4ED8] py-4">UPCOMING MOVIES</p>
          <p className="text-2xl mb-4">Exciting Movie Coming Soon</p>
        </div>

        <div className="absolute right-10">
          <button className="bg-slate-400 rounded-full w-10 h-10 text-white mr-1">{`<-`}</button>
          <button className="bg-slate-400 rounded-full w-10 h-10 text-white">{`->`}</button>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <FetchMovies />
      </section>

      {/* ## Subscribe Section */}
      <section className="px-8">
        <Subscribe />
      </section>
    </>
  );
};

export default Home;
