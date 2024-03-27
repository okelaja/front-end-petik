import React from "react";
import Movie from "../Movie/Movie.js";
import './Movies.css'

const Movies = () => {
    const datas = [
        {
            title : "Bomb Train",
            year : 2012,
            genre : "Comedy",
            poster : "http://picsum.photos/200/300"
        },
        {
            title : "Anaconda",
            year : 2019,
            genre : "Action",
            poster : "http://picsum.photos/200/300"
        },
        {
            title : "Anacobra",
            year : 2010,
            genre : "Horror",
            poster : "http://picsum.photos/200/300"
        },
        {
            title : "Sobari",
            year : 2018,
            genre : "Horror",
            poster : "http://picsum.photos/200/300"
        },
        {
            title : "Azhari",
            year : 2023,
            genre : "Actionn",
            poster : "http://picsum.photos/200/300"
        }
    ]
  return (
    <div className="">
      <h2>Lates Movies</h2>
      <div className="movies-container">
        {
            datas.map((data, index) => {
                return (
                    <Movie
                    title={data.title}
                    year={data.year}
                    genre={data.genre}
                    poster={data.poster}
                    />
                );
            })
        }
        
      </div>
    </div>
  );
};

export default Movies;
