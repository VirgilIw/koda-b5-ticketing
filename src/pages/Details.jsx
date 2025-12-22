import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react";
import fetchUrl from "../utils/fetch";
import { bookingContext } from "../contexts/booking/bookingContext";

const Details = () => {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState(null);

  //  state bentuk object
  const [data, setData] = useState({
    date: "",
    time: "08:30 AM",
    location: "Purwokerto",
    cinema: "",
  });

  const { setBookingMovie } = useContext(bookingContext);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const apiKeyMovie = import.meta.env.VITE_TMDB_API_KEY_MOVIE;
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKeyMovie}`;
      const response = await fetchUrl(url);
      console.log(response);
      setDetailMovie(response);
      return response;
    })();
  }, [id]);

  if (!detailMovie)
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleBookNow = () => {
    const bookingData = {
      movieTitle: detailMovie.title,
      movieId: id,
      ...data,
    };

    console.log("Booking Data:", bookingData);
    setBookingMovie(bookingData);
    navigate(`/order/${id}`);
  };

  return (
    <div className="min-h-screen w-[99vw]">
      {/* Hero Backdrop Section */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-center"
          src={`https://image.tmdb.org/t/p/original/${detailMovie.backdrop_path}`}
          alt="backdrop"
        />
        <div className="absolute"></div>
      </div>

      {/* Content Section */}
      <div className="relative -mt-32 px-8 pb-16 md:px-16 lg:px-24">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Poster */}
          <div className="shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500/${detailMovie.poster_path}`}
              alt="poster"
              className="w-64 rounded-lg shadow-2xl"
            />
          </div>

          {/* Movie Info */}
          <div className="flex-1 lg:mt-40">
            <h1 className="mb-4 text-sm font-bold md:text-5xl lg:text-2xl">
              {detailMovie.title}
            </h1>

            {/* Genres */}
            <div className="mb-6 flex flex-wrap gap-3">
              {detailMovie.genres?.map((genre) => (
                <span key={genre.id} className="rounded-md px-3 py-1 text-sm">
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Movie Details Grid */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <p className="mb-1 text-sm">Release date</p>
                <p className="text-lg font-medium">
                  {new Date(detailMovie.release_date).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    },
                  )}
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm">Directed by</p>
                <p className="text-lg font-medium">
                  {detailMovie.production_companies[0].name}
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm">Duration</p>
                <p className="text-lg font-medium">
                  {Math.floor(detailMovie.runtime / 60)} hours{" "}
                  {detailMovie.runtime % 60} minutes
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm">Rating</p>
                <p className="text-lg font-medium">
                  {detailMovie.vote_average?.toFixed(1)}/10
                </p>
              </div>
            </div>

            {/* Synopsis */}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold">Synopsis</h2>
          <p className="text-sm leading-relaxed text-[#A0A3BD]">
            {detailMovie.overview}
          </p>
        </div>

        {/* Book Tickets Section */}
        <div className="mb-6 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Book Tickets
          </h2>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Choose Date */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">
                Choose Date
              </label>
              <div className="relative">
                <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                  <Calendar size={20} />
                </div>
                <input
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pr-4 pl-12 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Choose Time */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">
                Choose Time
              </label>
              <div className="relative">
                <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                  <Clock size={20} />
                </div>
                <select
                  name="time"
                  value={data.time}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-4 pr-10 pl-12 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="08:30 AM">08:30 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="01:30 PM">01:30 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="06:30 PM">06:30 PM</option>
                  <option value="09:00 PM">09:00 PM</option>
                </select>
                <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>

            {/* Choose Location */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">
                Choose Location
              </label>
              <div className="relative">
                <div className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400">
                  <MapPin size={20} />
                </div>
                <select
                  name="location"
                  value={data.location}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-4 pr-10 pl-12 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option>Purwokerto</option>
                  <option>Jakarta</option>
                  <option>Bandung</option>
                  <option>Surabaya</option>
                  <option>Yogyakarta</option>
                  <option>Semarang</option>
                </select>
                <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                  <ChevronDown size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Filter Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="transform rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Cinema Results Section */}
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-900">Choose Cinema</h2>
            <span className="font-semibold text-blue-600">39 Result</span>
          </div>
          {/* Cinema Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Cinema Card */}
            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="cinema"
                value="ebu"
                checked={data.cinema === "ebu"}
                onChange={(e) => setData({ ...data, cinema: e.target.value })}
                className="peer hidden"
              />

              <div className="flex h-40 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-xl font-semibold text-gray-700 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:border-blue-500 hover:shadow-lg">
                ebu.id
                <span className="mt-2 text-sm text-gray-400 peer-checked:text-blue-500">
                  Available
                </span>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="cinema"
                value="hiflix"
                checked={data.cinema === "hiflix"}
                onChange={(e) => setData({ ...data, cinema: e.target.value })}
                className="peer hidden"
              />
              <div className="flex h-40 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-xl font-semibold text-gray-700 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:border-blue-500 hover:shadow-lg">
                hiflix
                <span className="mt-2 text-sm text-gray-400 peer-checked:text-blue-500">
                  Available
                </span>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="cinema"
                value="cineone21"
                checked={data.cinema === "cineone21"}
                onChange={(e) => setData({ ...data, cinema: e.target.value })}
                className="peer hidden"
              />
              <div className="flex h-40 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-xl font-semibold text-gray-700 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:border-blue-500 hover:shadow-lg">
                CineOne21
                <span className="mt-2 text-sm text-gray-400 peer-checked:text-blue-500">
                  Available
                </span>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input
                type="radio"
                name="cinema"
                value="ebu2"
                checked={data.cinema === "ebu2"}
                onChange={(e) => setData({ ...data, cinema: e.target.value })}
                className="peer hidden"
              />
              <div className="flex h-40 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white text-xl font-semibold text-gray-700 transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-checked:ring-2 peer-checked:ring-blue-500 hover:border-blue-500 hover:shadow-lg">
                ebu.id
                <span className="mt-2 text-sm text-gray-400 peer-checked:text-blue-500">
                  Available
                </span>
              </div>
            </label>
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center gap-2">
            <button className="h-10 w-10 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 font-semibold text-white shadow-lg">
              1
            </button>
            <button className="h-10 w-10 rounded-lg bg-gray-100 font-semibold text-gray-700 transition-all hover:bg-gray-200">
              2
            </button>
            <button className="h-10 w-10 rounded-lg bg-gray-100 font-semibold text-gray-700 transition-all hover:bg-gray-200">
              3
            </button>
            <button className="h-10 w-10 rounded-lg bg-gray-100 font-semibold text-gray-700 transition-all hover:bg-gray-200">
              4
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleBookNow}
              className="my-5 rounded bg-blue-600 p-2 text-white"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
