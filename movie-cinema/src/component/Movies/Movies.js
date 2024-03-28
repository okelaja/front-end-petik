import React, { useState } from "react";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import Movie from "../Movie/Movie.js";
import './Movies.css'

const Movies = () => {
    // ini pembuatan state di class komponen
    // const [counter, setCounter] = useState (0);
    //     const increment = () => {
    //         setCounter(prevCount => prevCount + 1);
    //     };
    //     const decrement = () => {
    //         setCounter(prevCount => prevCount - 1);
    //     };
    

    const [datas, setDatas] = useState([
        {
            title : "Dilan 1990 (2018)",
            year : 2018,
            genre : "Romance",
            poster : "http://picsum.photos/200/300"
        },
        {
            title : " Everything Everywhere All at Once (2022)",
            year : 2022,
            genre : "Action",
            poster : "http://picsum.photos/200/300"
        },
        {
            title : "Habibie & Ainun (2012)",
            year : 2012,
            genre : "Romance",
            poster : "http://picsum.photos/200/300"
        },
        {
            title : " Top Gun: Maverick (2022)",
            year : 2022,
            genre : "Action",
            poster : "http://picsum.photos/200/300"
        },
        {
            title : "Extraction (2020)",
            year : 2020,
            genre : "Narkotic",
            poster : "http://picsum.photos/200/300"
        },
    ]);

    const addMovie =(movie) => {
        setDatas([...datas, movie])
    };


    const handleClick = () => {
        const movie = {
            title : "Amazing Spiderman",
            year : 2012,
            poster : "http://picsum.photos/200/300",
            genre : "Action"
        };
    //    setDatas([...datas, movie]);
    };

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
                    })}
                {/* <button onClick={handleClick}>Add Movie</button> */}
                {/* <button onClick={increment}>tambah</button>
                <button onClick={decrement}>kurang</button> */}
            </div>
            <AddMovieForm onAddMovie={addMovie}/>
        </div>
    );
           
};

export default Movies;
