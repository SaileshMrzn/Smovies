import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/slice/movieSlice";
import MovieCard from "../components/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../common/settings";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

  let renderShows = "";
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div>
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <>
      <div className="mx-[3rem] mb-1 text-lg">Movies</div>
      <div className="flex justify-center">
        <div className="h-fit w-[90%] mb-12">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="mx-[3rem] mb-1 text-lg">Series</div>
      <div className="flex justify-center">
        <div className="w-[90%] h-fit mb-12">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </>
  );
}

export default MovieListing;
