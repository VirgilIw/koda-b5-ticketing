import fetchUrl from "../utils/fetch";

const getTmdbData = async (url) => {
  try {
    const data = await fetchUrl(url);
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export default getTmdbData;
