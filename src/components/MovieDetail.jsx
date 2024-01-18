import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieDetail,
  getSelectedMovie,
  removeMovieDetail,
} from "../features/slice/movieSlice";

function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));
    return () => {
      dispatch(removeMovieDetail());
    };
  }, [imdbID]);
  return (
    <div className="mx-[4rem] flex gap-3 mb-5 mt-5">
      {Object.keys(data).length === 0 ? (
        <div className="flex items-center w-screen h-[7rem] justify-center text-base">
          Loading...
        </div>
      ) : (
        <>
          <div className="left h-[100%] w-[75%] flex flex-col justify-center relative">
            <div className="title text-4xl mb-3">{data.Title}</div>
            <div className="attrib flex gap-3 mb-2 text-sm">
              <p>IMDB rating: {data.imdbRating}</p>
              <p>IMDB votes: {data.imdbVotes}</p>
              <p>Runtime: {data.Runtime}</p>
              <p>Year: {data.Year}</p>
            </div>
            <div className="desc mb-2">{data.Plot}</div>
            <div className="otherInfo flex gap-5">
              <div className="otherLeft">
                <p className="my-2">Type</p>
                <p className="my-2">Country</p>
                <p className="my-2">Language</p>
                <p className="my-2">Genre</p>
                <p className="my-2">Release</p>
                <p className="my-2">Director</p>
                <p className="my-2">Cast</p>
                <p className="my-2">Awards</p>
              </div>
              <div className="otherRight">
                <p className="my-2">{data.Type}</p>
                <p className="my-2">{data.Country}</p>
                <p className="my-2">{data.Language}</p>
                <p className="my-2">{data.Genre}</p>
                <p className="my-2">{data.Released}</p>
                <p className="my-2">{data.Director}</p>
                <p className="my-2">{data.Actors}</p>
                <p className="my-2">{data.Awards}</p>
              </div>
            </div>
          </div>
          <div className="right flex justify-center items-center">
            <img src={data.Poster} alt="" />
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetail;
