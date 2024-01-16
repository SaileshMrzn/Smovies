import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../components/MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/slice/movieSlice";

function Home() {
  const dispatch = useDispatch();
  const default_movie = "Batman";
  const default_show = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(default_movie));
    dispatch(fetchAsyncShows(default_show));
  }, []);

  return (
    <div className="mx-[1.5rem] overflow-x-hidden">
      <MovieListing />
    </div>
  );
}

export default Home;
