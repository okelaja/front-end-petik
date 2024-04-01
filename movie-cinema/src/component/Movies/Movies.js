import React, { useEffect, useState } from "react";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import Movie from "../Movie/Movie.js";
import "./Movies.css";
import { getMovieList } from "../../api.js";


const Movies = () => {
  // ini pembuatan state di class komponen
  // const [counter, setCounter] = useState (0);
  //     const increment = () => {
  //         setCounter(prevCount => prevCount + 1);
  //     };
  //     const decrement = () => {
  //         setCounter(prevCount => prevCount - 1);
  //     };

  const [datas, setDatas] = useState([]);

  const addMovie = (movie) => {
    setDatas([...datas, movie]);
  };

  useEffect(() => {
    // untuk menangkap result api
    getMovieList().then((result) => {
      setDatas(result);
    });
  },[]);
  
  console.log(datas);

  const handleClick = () => {
    const movie = {
      title: "Amazing Spiderman",
      year: 2012,
      poster: "http://picsum.photos/200/300",
      genre: "Action",
    };
    //    setDatas([...datas, movie]);
  };

  return (
    <div className="">
      <h2></h2>
      <div className="movies-container">
        {datas.map((data, index) => {
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
        {/* <button onClick={handleClick}>Add Movie</button> */}
        {/* <button onClick={increment}>tambah</button>
                <button onClick={decrement}>kurang</button> */}
      </div>
      <AddMovieForm onAddMovie={addMovie} />
    </div>
  );
};

export default Movies;
