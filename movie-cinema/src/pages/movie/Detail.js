import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { getDetailMovie } from '../../api';

const MovieDetail = ({ id }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8e465ff28280979967a70c1462d19f7f`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;