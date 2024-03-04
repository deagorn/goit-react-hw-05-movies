import React, { useEffect, useState } from 'react'
import { fetchTrending } from 'services/api';
import styles from './Home.module.css';

const Home = () => {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    fetchTrending().then((data) => setFilms(data)).catch(error => console.log(error))


  }, [])



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      <ul className={styles.filmList}>
        {films?.map(film => (<li key={film.id} className={styles.filmItem}>
          <a href="/" className={styles.filmButton} >{film.title ? film.title : film.name}
          <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" /></a>
          </li>))
          }
      </ul>
    </div>
  );
};

export default Home;