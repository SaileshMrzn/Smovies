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
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, []);

  return (
    <div className="mx-[1.5rem] h-fit overflow-x-hidden">
      <MovieListing />
    </div>
  );
}

export default Home;
