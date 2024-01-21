import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

var apikey = import.meta.env.VITE_API_KEY;
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${apikey}&s=${term}&type=movie`
    );
    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${apikey}&s=${term}&type=series`
    );
    return res.data;
  }
);

export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${apikey}&i=${id}&Plot=full`
    );
    return res.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  movieDetail: {},
  loader: true,
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeMovieDetail: (state) => {
      state.movieDetail = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      state.loader = true;
    });

    builder.addCase(fetchAsyncShows.pending, (state) => {
      state.loader = true;
    });

    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      return { ...state, movies: payload, loader: false };
    });

    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      return { ...state, shows: payload, loader: false };
    });

    builder.addCase(fetchAsyncMovieDetail.fulfilled, (state, { payload }) => {
      return { ...state, movieDetail: payload };
    });

    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("movies rejected");
    });

    builder.addCase(fetchAsyncShows.rejected, () => {
      console.log("shows rejected");
    });

    builder.addCase(fetchAsyncMovieDetail.rejected, () => {
      console.log("movie detail rejected");
    });
  },
});

export const { removeMovieDetail } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovie = (state) => state.movies.movieDetail;
export const getLoaderState = (state) => state.movies.loader;
