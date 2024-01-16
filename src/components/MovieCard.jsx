import React from "react";
import { Link } from "react-router-dom";

function MovieCard(props) {
  const { data } = props;
  return (
    <>
      <Link to={`movie/${data.imdbID}`}>
        <div className="h-fit w-[11rem] mx-3 my-3 overflow-hidden py-3 px-4 flex flex-col items-center bg-[#344254] rounded cursor-pointer hover:scale-110 transition ease-in-out delay-[0.5ms]">
          <div className="img">
            <img
              className="h-[100%] w-[100%]"
              // src="https://static.bunnycdn.ru/i/cache/images/0/04/04f7d5c5954f7c9c2e1313e0b34e4306.jpg"
              src={data.Poster}
              alt=""
              srcset=""
            />
          </div>
          <div className="flex justify-start my-2 w-[10rem] px-2 flex-col">
            <div className="text-xs">{data.Year}</div>
            <div>{data.Title}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
