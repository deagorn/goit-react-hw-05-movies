import React, { useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import useHttp from 'components/hooks/useHttp'
import { fetchMovieSearch } from 'services/api';
import styles from './Movies.module.css'
import InputForm from './InputForm';


const Movies = () => {
  const location = useLocation();
  const [searchParams, setsearchParams] = useSearchParams();
  const query = searchParams.get('query') || ''
  const [films, setFilm, total] = useHttp(fetchMovieSearch, query);


  return (
    <div className={styles.container}>
      <InputForm setsearchParams={setsearchParams} />
      {searchParams.size > 0 ? <div>
        <h1 className={styles.title}>Results</h1>
        <ul className={styles.filmList}>
          {films?.map(film => (<li key={film.id} className={styles.filmItem}>
            <Link state={{ from: location }} to={`/movies/${film.id.toString()}`} className={styles.filmButton} >
              {film.title ? film.title : film.name}
              {film.poster_path ? (
                <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="" />
              ) :
                (<img src="https://via.placeholder.com/320x450" alt="" className={styles.placeholder} />
                )}
            </Link>
          </li>)
          )}
        </ul>
        {/* {films.length && films.length < totalImg && <Button onClick={handleLoadMore} />} */}
      </div> : null}
      
    </div>
  )
}

export default Movies