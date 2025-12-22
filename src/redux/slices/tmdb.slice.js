import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTmdbData from "../../api/getTmdbData";
import getTmdbGenre from "../../api/getTmdbGenre";
import getTmdbDetail from "../../api/getTmdbDetail";

const getTmdbThunk = createAsyncThunk(
  "dataTmdb/getDataTmdb",
  async (payload, { rejectWithValue }) => {
    try {
      const apiKeyMovie = import.meta.env.VITE_TMDB_API_KEY_MOVIE;
      const tmdbUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeyMovie}`;
      //
      const data = await getTmdbData(tmdbUrl);
      console.log("THUNK DATA:", data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

const getGenreThunk = createAsyncThunk(
  "genresMovie/getGenresMovie",
  async (payload, { rejectWithValue }) => {
    try {
      const apikeyGenre = import.meta.env.VITE_TMDB_API_KEY_GENRE;
      const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikeyGenre}`;
      const tmdbGenre = await getTmdbGenre(genreUrl);
      //
      return tmdbGenre;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const getDetailThunk = createAsyncThunk(
  "movieDetail/getDetail",
  async (payload, { rejectWithValue }) => {
    try {
      const apikeyGenre = import.meta.env.VITE_TMDB_API_KEY_GENRE;
      const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apikeyGenre}`;
      const tmdbGenre = await getTmdbDetail(genreUrl);
      //
      return tmdbGenre;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  movies: [],
  genres: [],
  getMovieStatus: {
    movie: {
      isLoading: false,
      isSuccess: false,
      isFailed: false,
    },
  }, 
  errors: {
    product: null,
  },
};

const tmdbSlice = createSlice({
  name: "tmdb",
  initialState,
  extraReducers: (builder) => {
    return builder
      .addAsyncThunk(getTmdbThunk, {
        pending: (prevState) => {
          prevState.getMovieStatus.movie.isLoading = true;
          prevState.getMovieStatus.movie.isSuccess = false;
          prevState.getMovieStatus.movie.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.getMovieStatus.movie.isLoading = false;
          prevState.getMovieStatus.movie.isSuccess = true;
          prevState.movies = payload;
        },
        rejected: (prevState, { payload }) => {
          prevState.getMovieStatus.movie.isLoading = false;
          prevState.getMovieStatus.movie.isFailed = true;
          prevState.errors.product = payload;
        },
      })
      .addAsyncThunk(getGenreThunk, {
        pending: (prevState) => {
          prevState.getMovieStatus.movie.isLoading = true;
          prevState.getMovieStatus.movie.isSuccess = false;
          prevState.getMovieStatus.movie.isFailed = false;
        },
        fulfilled: (prevState, { payload }) => {
          prevState.getMovieStatus.movie.isLoading = false;
          prevState.getMovieStatus.movie.isSuccess = true;
          console.log("GENRE PAYLOAD:", payload);
          prevState.genres = payload.genres;
        },
        rejected: (prevState, { payload }) => {
          prevState.getMovieStatus.movie.isLoading = false;
          prevState.getMovieStatus.movie.isFailed = true;
          prevState.errors.product = payload;
        },
      });
  },
});

export const tmdbAction = {
  ...tmdbSlice.actions,
  getTmdbThunk,
  getDetailThunk,
  getGenreThunk,
};

export default tmdbSlice.reducer;
