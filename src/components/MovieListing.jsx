import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/slice/movieSlice";
import MovieCard from "../components/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MovieListing() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
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
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div>
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <>
      <h2 className="mx-[3rem] mb-1 text-lg">Movies</h2>
      <div className="flex justify-center">
        <div className="h-fit w-[96%] mb-12">
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
      <h2 className="mx-[3rem] mb-1 text-lg">Series</h2>
      <div className="flex justify-center">
        <div className="h-fit w-[96%] mb-12">
          <Slider {...settings}>{renderShows}</Slider>
        </div>
      </div>
    </>
  );
}

export default MovieListing;
