import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Subscribe from "../components/Subscribe";
import FetchMovies from "../components/FetchMovies";

const Movie = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const activeGenre = searchParams.get("genre");

  const genres = [
    { id: 53, name: "Thriller" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romantic" },
    { id: 12, name: "Adventure" },
    { id: 878, name: "Sci-Fi" },
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_TMDB_API_KEY_MOVIE;

        const url = activeGenre
          ? `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${activeGenre}`
          : `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setAllMovies(data.results || []);
        setPage(1); // reset pagination saat genre berubah
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [activeGenre]);

  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  const perPage = 8;
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const currentMovies = filteredMovies.slice(start, end);
  const totalPage = Math.ceil(filteredMovies.length / perPage);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("search", e.target.value);
      return params;
    });

    setPage(1);
  };

const handleGenre = (genreId) => {
  setSearchParams((prev) => {
    const params = new URLSearchParams(prev);
    params.set("genre", genreId);
    return params;
  });
};

const clearAllFilter =(e)=>{
  e.preventDefault()
  setSearchParams("")
}

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[50vh] w-full lg:h-[70vh]">
        <img
          src="/src/assets/Group-8.png"
          alt="bg-image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative top-15 left-10 z-10 w-[50%] md:top-15 md:left-20 lg:top-20">
          <h1 className="mb-4 w-96 font-semibold text-white lg:text-2xl">
            LIST MOVIE OF THE WEEK
          </h1>
          <h2 className="text-2xl leading-[1.5em] text-white md:text-4xl lg:text-5xl">
            Experience the Magic of <br /> Cinema: Book Your Tickets <br />
            Today
          </h2>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="flex flex-col items-center justify-center py-10 md:grid md:grid-cols-[3fr_7fr]">
        {/* SEARCH */}
        <div className="mx-auto flex flex-col justify-center md:pl-17 lg:pl-17">
          <p className="py-2">Cari Event</p>
          <div className="flex rounded border border-slate-200 pl-2">
            <button type="button">
              <img src="/src/assets/search.svg" alt="search" className="w-8" />
            </button>
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search movie..."
              className="rounded px-4 py-2 outline-none"
            />
          </div>
        </div>

        {/* GENRE */}
        <div className="md:flex md:flex-col md:justify-center md:text-start lg:justify-center lg:items-center">
          <p className="py-2 pt-4 text-center md:ml-[3%] md:text-start lg:ml-[2.5%]">
            Filter
          </p>
          <div className="gap-4 md:flex md:flex-wrap lg:flex-row">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => handleGenre(genre.id)}
                className={`mb-2 ml-2 rounded-md px-6 py-3 font-medium ${
                  activeGenre === String(genre.id)
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-gray-700"
                }`}
              >
                {genre.name}
              </button>
            ))}
            <button onClick={clearAllFilter} className="pl-10 md:pl-1 lg:mb-2 bg-blue-600 text-white rounded lg:px-4 hover:bg-blue-800">clear Filter</button>
          </div>
        </div>
      </section>

      {/* MOVIE LIST */}
      <section>
        <FetchMovies movies={currentMovies} />
      </section>

      {/* PAGINATION */}
      {totalPage > 1 && (
        <div className="flex items-center justify-center gap-4 py-10">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="h-12 w-12 rounded-full bg-blue-600 text-white disabled:bg-gray-300"
          >
            ←
          </button>

          {[...Array(totalPage)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`h-12 w-12 rounded-full ${
                page === i + 1 ? "bg-blue-600 text-white" : "text-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPage}
            className="h-12 w-12 rounded-full bg-blue-600 text-white disabled:bg-gray-300"
          >
            →
          </button>
        </div>
      )}

      <Subscribe />
    </>
  );
};

export default Movie;
