import React, { useEffect, useState } from "react";
import AddMovieForm from "../../component/AddMovieForm/AddMovieForm.js";
import Movie from "../../component/Movie/Movie.js";
import { getTopRated } from "../../api.js";


const TopRated = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getTopRated().then((result) => {
      setDatas(result);
    });
  },[]);

  return (
    <div className="">
     <h1>Top Rated</h1>
      <div className="movies-container">
        {datas.map((data,) => {
          return (
            <Movie
              id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
              average={data.vote_average}
              count={data.vote_count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;
