import { Link } from "react-router";
import FetchMovies from "../components/FetchMovies";
import Subscribe from "../components/Subscribe";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <section className="mt-10 flex flex-col px-4 md:grid md:grid-cols-2 md:px-10">
        <div className="mt-10 text-center md:w-[45vw] md:pl-[2%] md:text-start">
          <h1 className="mb-4 text-sm font-semibold text-[#1D4ED8]">
            MOVIE TICKET PURCHASES #1 IN INDONESIA
          </h1>
          <h2 className="text-xl leading-[1.5em] md:text-4xl lg:text-5xl">
            Experience the Magic of Cinema: Book Your Tickets Today
          </h2>
          <p className="mt-4">
            Sign up and get the ticket with a lot of <br /> discount
          </p>
        </div>

        <section className="mt-5 flex justify-center gap-2 px-4 text-center md:absolute md:right-12 md:mx-auto md:mt-0 md:grid md:w-80 md:grid-cols-2 lg:right-16">
          <div className="flex flex-col gap-2">
            <img
              src="/src/assets/john wicked.png"
              alt="john wicked"
              className="h-auto w-full"
            />
            <img
              src="/src/assets/spiderman.png"
              alt="spiderman"
              className="h-auto w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <img
              src="/src/assets/lion king.png"
              alt="lion king"
              className="h-auto w-full"
            />
            <img
              src="/src/assets/roblox.png"
              alt="roblox"
              className="h-auto w-full"
            />
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-lg p-4 md:p-8 lg:p-12">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold tracking-wider text-blue-600 uppercase">
              WHY CHOOSE US
            </p>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
              Unleashing the Ultimate Movie Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-200">
                <svg
                  className="h-8 w-8 text-blue-600"
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
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Guaranteed
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-200">
                <svg
                  className="h-8 w-8 text-blue-600"
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
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Affordable
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipis elit.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-200">
                <svg
                  className="h-8 w-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 0 00-2-2h-1z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                24/7 Customer Support
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipis elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 flex flex-col items-center justify-center px-4">
        <h3 className="text-sm font-semibold tracking-wider text-[#1D4ED8] uppercase">
          MOVIES
        </h3>
        <p className="mt-2 text-center text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl">
          Exciting Movies That Should Be <br /> Watched Today
        </p>
      </section>

      <FetchMovies limit={4} />
      <section className="mb-8 flex flex-col items-center justify-center">
        <Link
          to={"/movie"}
          className="flex w-full max-w-lg cursor-pointer justify-center py-8 text-[#1D4ED8] hover:underline md:py-12"
        >
          View All {`->`}
        </Link>
      </section>

      <section className="mb-8 px-4 md:px-10">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wider text-[#1D4ED8] uppercase">
              UPCOMING MOVIES
            </p>
            <p className="mt-2 text-xl md:text-2xl">
              Exciting Movie Coming Soon
            </p>
          </div>

          <div className="flex gap-2">
            <button className="h-10 w-10 rounded-full bg-slate-400 text-white transition-colors hover:bg-slate-500">{`<-`}</button>
            <button className="h-10 w-10 rounded-full bg-slate-400 text-white transition-colors hover:bg-slate-500">{`->`}</button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <FetchMovies limit={4} />
      </section>

      <section className="px-4 md:px-8">
        <Subscribe />
      </section>
    </div>
  );
};

export default Home;
