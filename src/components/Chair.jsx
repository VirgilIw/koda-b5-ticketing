import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchUrl from "../utils/fetch";
import { bookingContext } from "../contexts/booking/bookingContext";
import Checkout from "./Checkout";

const Chair = () => {
  const { id } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [chooseKursi, setChooseKursi] = useState([]);
  const { bookingMovie } = useContext(bookingContext);

  useEffect(() => {
    (async () => {
      const apiKeyMovie = import.meta.env.VITE_TMDB_API_KEY_MOVIE;
      const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKeyMovie}`;
      const response = await fetchUrl(url);
      setSelectedMovie(response);
    })();
  }, [id]);

  const handleClick = (item) => {
    setChooseKursi((prev) => {
      if (prev.includes(item)) {
        return prev.filter((seat) => seat !== item);
      }
      return [...prev, item];
    });
  };

  const rows = ["A", "B", "C", "D", "E", "F", "G"];
  const seats = [];
  
  for (let r = 0; r < rows.length; r++) {
    const row = [];
    for (let c = 1; c <= 7; c++) {
      row.push(`${rows[r]}-${c}`);
    }
    row.push("GAP");
    for (let c = 8; c <= 14; c++) {
      row.push(`${rows[r]}-${c}`);
    }
    seats.push(row);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_350px]">
          {/* Main Content */}
          <div>
            {/* Movie Info Card */}
            {selectedMovie && (
              <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="flex gap-4 p-6">
                  <img
                    className="h-32 w-24 rounded object-cover"
                    src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                    alt={selectedMovie.title}
                  />
                  <div className="flex-1">
                    <h2 className="mb-2 text-xl font-bold text-gray-900">
                      {selectedMovie.title}
                    </h2>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {selectedMovie.genres.map((genre) => (
                        <span
                          key={genre.id}
                          className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Showtime:</span>{" "}
                      {bookingMovie.time}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Seat Selection */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Choose Your Seat
              </h2>

              {/* Screen */}
              <div className="mb-8">
                <div className="mx-auto w-4/5 rounded-t-3xl  py-2 text-center">
                  <span className="text-sm font-medium text-gray-600">
                    SCREEN
                  </span>
                </div>
              </div>

              {/* Seats Grid */}
              <div className="flex justify-center gap-6">
                {/* Row Labels */}
                <div className="flex flex-col gap-3 pt-1">
                  {rows.map((row) => (
                    <div
                      key={row}
                      className="flex h-8 items-center justify-center"
                    >
                      <span className="text-sm font-semibold text-gray-600">
                        {row}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Seats */}
                <div className="flex flex-col gap-3">
                  {seats.map((row, rowIdx) => (
                    <div key={rowIdx} className="flex items-center gap-2">
                      {row.map((seat, idx) =>
                        seat === "GAP" ? (
                          <div key={idx} className="w-6" />
                        ) : (
                          <button
                            key={seat}
                            onClick={() => handleClick(seat)}
                            className={`h-8 w-8 rounded-md text-xs font-medium transition-all ${
                              chooseKursi.includes(seat)
                                ? "bg-blue-600 text-white shadow-md"
                                : "bg-gray-200 text-gray-700 hover:bg-blue-400 hover:text-white"
                            }`}
                          >
                          
                          </button>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-8 flex justify-center gap-6 border-t pt-6">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-gray-200"></div>
                  <span className="text-sm text-gray-600">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-md bg-blue-600"></div>
                  <span className="text-sm text-gray-600">Selected</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Summary */}
          <div className="lg:sticky lg:top-6 lg:h-fit">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                {bookingMovie.location} - {bookingMovie.cinema}
              </h3>

              {/* Selected Seats */}
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium text-gray-700">
                  Selected Seats:
                </p>
                {chooseKursi.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {chooseKursi.map((seat) => (
                      <span
                        key={seat}
                        className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                      >
                        {seat}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No seats selected</p>
                )}
              </div>

              {/* Booking Details */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Movie:</span>
                  <span className="font-medium text-gray-900">
                    {bookingMovie.movieTitle}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium text-gray-900">
                    {bookingMovie.date}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-medium text-gray-900">
                    {bookingMovie.time}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-medium text-gray-900">
                    {bookingMovie.location}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-3 text-sm">
                  <span className="text-gray-600">Total Seats:</span>
                  <span className="font-bold text-gray-900">
                    {chooseKursi.length}
                  </span>
                </div>
              </div>

              {/* Checkout */}
              <div className="mt-6">
                <Checkout />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chair;