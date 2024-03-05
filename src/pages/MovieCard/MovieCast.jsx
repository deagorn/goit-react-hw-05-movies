import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/api';
import styles from './MovieCard.module.css';

const MovieCast = () => {
const { movieId } = useParams();
const [cast, setCast] = useState(null);

  useEffect(() => {
    if (movieId) { 
      fetchMovieCredits(movieId)
        .then(data => setCast(data))
        .catch(err => console.log(err));
    }
  }, [movieId]);
    
if (!cast) {
    return 'Loading...'
  }

    return (
        <div>
            <ul className={styles.cast}>
                {cast.map(item => (
                    <li key={item.id} className={styles.actor}>
                        {item.profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={item.name} />
                        ) : (<img src="https://via.placeholder.com/320x450" alt="" className={styles.placeholder} />              
                        )}
                        <h3 className={styles.name_cast}><span className={styles.title_cast}>Name:</span> {item.name}</h3>
                        <h3 className={styles.name_cast}><span className={styles.title_cast}>Character:</span> {item.character}</h3>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default MovieCast