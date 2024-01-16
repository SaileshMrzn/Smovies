import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apikey from "../../common/api/apikey";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const searchTerm = "batman";
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}&type=movie`
    );
    return res.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const searchTerm = "friends";
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${apikey}&s=${searchTerm}&type=series`
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
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("pending");
    });

    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("Fetched");
      return { ...state, movies: payload };
      // state.entities.push(action.payload);
    });

    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      console.log("Fetched");
      return { ...state, shows: payload };
      // state.entities.push(action.payload);
    });

    builder.addCase(fetchAsyncMovieDetail.fulfilled, (state, { payload }) => {
      console.log("Fetched detail");
      // state.movieDetail = payload;
      return { ...state, movieDetail: payload };
    });

    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("rejected");
    });
  },
});

export const { removeMovieDetail } = movieSlice.actions;
export default movieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovie = (state) => state.movies.movieDetail;
