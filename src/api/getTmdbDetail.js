import fetchUrl from "../utils/fetch";

const getTmdbDetail = async (url) => {
  try {
    const tmdbDetail = await fetchUrl(url);
    return tmdbDetail;
  } catch (error) {
    console.log(error.message);
  }
};

export default getTmdbDetail;
