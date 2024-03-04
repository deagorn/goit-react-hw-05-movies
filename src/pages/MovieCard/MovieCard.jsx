import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieCard = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movieId) { 
      fetchMovieDetails(movieId)
        .then(data => setMovie(data))
        .catch(err => console.log(err));
    }
  }, [movieId]);

  if (!movie) {
    return <Loader/>
  }

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <h1>{movie.title ? movie.title : movie.name}</h1>
    </div>
  );
};

export default MovieCard;