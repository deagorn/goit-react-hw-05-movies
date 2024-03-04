import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import styles from './MovieCard.module.css';

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
    <div className={styles.container}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title ? movie.title : movie.name} />
      <div className={styles.infoColumn}>
        <h1  className={styles.title}>{movie.title ? movie.title : movie.name}</h1>
        <h2 className={styles.hTitle}>Overview</h2>
        <p className={styles.text}>{movie.overview}</p>
        <h2 className={styles.hTitle}>Genres</h2>
        <ul>
          {movie.genres.map(genre => <li key={genre.id} className={styles.genre}>{genre.name}</li>)}
        </ul>
      </div>
      <div className={styles.additionalInfoColumn}>
        <h3 className={styles.additionalTitle}>Additional information</h3>
        <nav>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`} className={styles.link}>Cast</NavLink>
              <NavLink className={styles.link} to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet/>
      </div>
      </div>
  );
};

export default MovieCard;