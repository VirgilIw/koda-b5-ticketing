import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tmdbAction } from "../redux/slices/tmdb.slice";
import { Link } from "react-router";

const FetchMovies = ({ limit }) => {
  // tambah prop limit
  const dispatch = useDispatch();
  const moviesRedux = useSelector((state) => state.tmdb.movies);
  const genres = useSelector((state) => state.tmdb.genres);

  useEffect(() => {
    dispatch(tmdbAction.getTmdbThunk());
    dispatch(tmdbAction.getGenreThunk());
  }, [dispatch]);


  // slice kalau ada limit
  const displayMovies = limit ? moviesRedux.slice(0, limit) : moviesRedux;

  const getGenres = (genreIds) => {
    if (!Array.isArray(genreIds) || !Array.isArray(genres)) return [];
    return genres
      .filter((genre) => genreIds.includes(genre.id)) // apakah genreIds dari paramater mengandung id dari genre yang bersumber dari redux? kalau true kita map hasilnya berdasarkan name, jadinya array baru
      .map((g) => g.name);
  };
  /* 
    Tujuan fungsi ini
    Mengubah array ID genre → jadi array nama genre 
  */
  return (
    <main className="flex gap-6 overflow-x-auto px-4 md:grid md:grid-cols-4 md:overflow-visible">
      {Array.isArray(displayMovies) &&
        displayMovies.map((movie) => (
          <div key={movie.id} className="shrink-0">
            {/* POSTER + HOVER OVERLAY */}
            <div className="group relative overflow-hidden rounded-2xl">
              <img
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title}
                className="h-[50vh] w-full rounded-2xl"
              />
              {/* OVERLAY */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {/* DETAILS */}
                <Link
                  to={`/detail/${movie.id}`}
                  className="cursor-pointer rounded-lg border border-white px-6 py-2 text-sm text-white"
                >
                  Details
                </Link>
                {/* BUY TICKET */}
                <Link to="/payment" className="rounded-lg bg-[#1D4ED8] px-6 py-2 text-sm font-semibold text-white">
                  Buy Ticket
                </Link>
              </div>
            </div>
            {/* TITLE */}
            <p className="mt-3 line-clamp-1 font-semibold">{movie.title}</p>
            {/* GENRES */}
            <div className="mt-2 flex flex-wrap gap-2">
              {getGenres(movie.genre_ids).map((genre) => (
                <span
                  key={genre} 
                  className="truncate rounded bg-[#A0A3BD1A] px-2 py-1 text-xs text-[#A0A3BD]"
                >
                  {genre} {/* genre di line ini = hasil dari g.name line 25 */}
                </span>
              ))}
            </div>
          </div>
        ))}
    </main>
  );
};

export default FetchMovies;
