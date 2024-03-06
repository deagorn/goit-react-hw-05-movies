import React, { useEffect, useState } from 'react'
import { fetchTrending } from 'services/api';
import styles from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchTrending().then((data) => setFilms(data)).catch(error => console.log(error))


  }, [])



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.filmList}>
        {films?.map(film => (<li key={film.id} className={styles.filmItem}>
          <Link state={{from : location}} to={`/movies/${film.id.toString()}`} className={styles.filmButton} >{film.title ? film.title : film.name}
          <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" /></Link>
          </li>))
          }
      </ul>
    </div>
  );
};

export default Home;