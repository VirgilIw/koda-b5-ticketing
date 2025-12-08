import { useEffect, useState } from "react";
import Subscribe from "../components/Subscribe";

const Movie = () => {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [allTmdb, setAllTmdb] = useState([]);
  // const [hoverMovie, setHoverMovie] = useState(false);

  const genres = ["Thriller", "Horror", "Romantic", "Adventure", "Sci-Fi"];

  useEffect(() => {
    (async function () {
      try {
        const tmdbUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=28b976ea87c130e70edaeb0ff3cf756a`;
        // const tmdbGenre = "https://api.themoviedb.org/3/genre/movie/list?api_key=28b976ea87c130e70edaeb0ff3cf756a";
        const response = await fetch(tmdbUrl);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        const datas = await response.json();
        const results = datas.results;
        console.log(results);

        const fixResults = results.map((item) => {
          return item;
        });
        //

        setAllTmdb(fixResults);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <section>
        <img
          src="src/assets/Group-8.png"
          alt="bg-image"
          className="h-[50vh] lg:w-screen lg:h-[70vh]"
        />
        <div className="absolute top-[20%] left-10 md:top-35 md:left-20 lg:top-[25%]">
          <h1 className="mb-4 text-white font-semibold lg:text-2xl">
            LIST MOVIE OF THE WEEK
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl leading-[1.5em] text-white">
            Experience the Magic of <br /> Cinema: Book Your Tickets <br />
            Today
          </h2>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center md:grid md:grid-cols-[3fr_7fr] py-10">
        <div className="flex flex-col justify-center mx-auto pl-5">
          <p className="py-2 ">Cari Event</p>
          <div className="flex border border-slate-200 pl-2 rounded">
            <button className="cursor-pointer">
              <img src="/src/assets/search.svg" alt="search" className="w-8" />
            </button>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="New Born Expert"
              className="py-2 outline-none px-4 rounded relative "
            />
          </div>
        </div>
        <div className="md:flex md:flex-col md:justify-center md:text-start">
          <p className="py-2 text-center pt-4 md:text-start md:ml-[3%] lg:ml-[2.5%]">
            Filter
          </p>
          <div className="md:flex gap-4">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`
        px-6 py-2 rounded-md font-medium cursor-pointer
        ${
          selectedGenre === genre
            ? "bg-blue-600 text-white"
            : "bg-transparent text-gray-700"
        }
      `}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="md:grid md:grid-cols-4 md:w-[99vw] mt-10">
        {allTmdb.map((item, idx) => {
          return (
            <section
              key={idx}
              className="flex flex-col justify-center items-center py-4"
            >
              <img
                src={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
                alt="image"
                className="md:w-[90%] md:h-80% rounded-xl"
              />
              <p className="line-clamp-1">{item.original_title}</p>
            </section>
          );
        })}
      </section>
      <Subscribe />
    </>
  );
};

export default Movie;
