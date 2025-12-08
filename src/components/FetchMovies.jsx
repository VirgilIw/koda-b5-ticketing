import { useEffect, useState } from "react";
import { Link } from "react-router";

// https://image.tmdb.org/t/p/w500/
const FetchMovies = () => {
  const [allTmdb, setAllTmdb] = useState([]);
  const [genres, setGenres] = useState([]);

  const apiKeyMovie = import.meta.env.VITE_TMDB_API_KEY_MOVIE;
  const apikeyGenre = import.meta.env.VITE_TMDB_API_KEY_GENRE;
  //
  useEffect(() => {
    (async function () {
      try {
        const tmdbUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeyMovie}`;
        const tmdbGenre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikeyGenre}`;
        const response1 = await fetch(tmdbUrl);
        //
        if (!response1.ok) {
          throw new Error(`${response1.status}: ${response1.statusText}`);
        }
        const datas1 = await response1.json();
        const results = datas1.results;

        const response2 = await fetch(tmdbGenre);
        const datas2 = await response2.json();

        console.log(datas2);

        setGenres(datas2.genres);

        const fixResults = results.slice(0, 4);
        setAllTmdb(fixResults);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // ambil nama genre dari genre_ids
  const getMovieGenres = (genre_Ids) => {
    return genres.filter((genre) => {
      return genre_Ids.includes(genre.id);
    });
  };

  return (
    <section className="flex flex-col md:grid md:grid-cols-4 gap-4 px-10">
      {allTmdb.map((item) => (
        <Link to={`/detail/${item.id}`} key={item.id}>
          <img
            src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
            alt={item.original_title}
            className="rounded-xl"
          />
          <p className="text-xl font-medium py-2">{item.original_title}</p>
          <div className="flex gap-2 flex-wrap">
            {getMovieGenres(item.genre_ids).map((gnr) => (
              <span
                key={gnr.id}
                className="bg-slate-200 text-slate-500 px-3 py-1 rounded-full text-sm"
              >
                {gnr.name}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </section>
  );
};

export default FetchMovies;
