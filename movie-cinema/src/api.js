import axios from "axios";
import { useParams } from "react-router-dom";

const apikey = "8e465ff28280979967a70c1462d19f7f";
let { id } = useParams;
 
export const getMovieList = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`
    );

    return movie.data.results;
};

export const getDetailMovie = async (id) => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
    );

    return movie.data.results;
};

// top rated

export const getTopRated = async () => {
    const movie = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`
    );

    return movie.data.results;
};
