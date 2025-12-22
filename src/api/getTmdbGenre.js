import fetchUrl from "../utils/fetch";

const getTmdbGenre = async (url) => {
  try {
    const tmdbDetail = await fetchUrl(url);
    return tmdbDetail;
  } catch (error) {
    console.log(error.message);
  }
};

export default getTmdbGenre;
