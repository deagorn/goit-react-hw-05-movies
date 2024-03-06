import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/api';
import styles from './MovieReviews.module.css';
import useHttp from 'components/hooks/useHttp';

const MovieReviews = () => {
  const { movieId } = useParams();
  
  const [reviews] = useHttp(fetchMovieReviews, movieId);

// const [reviews, setReviews] = useState(null);
  
  // useEffect(() => {
  //   if (movieId) { 
  //     fetchMovieReviews(movieId)
  //       .then(data => setReviews(data))
  //       .catch(err => console.log(err));
  //   }
  // }, [movieId]);

if (!reviews) {
    return 'Loading...'
  }

  return (
    <div>
      <ul className={styles.reviews}>
                {reviews.map(item => (
                    <li key={item.id} className={styles.review}>
                        <h2 className={styles.title}><span className={styles.name}>Name:</span> {item.author}</h2>
                        <h3 className={styles.review_text}> {item.content}</h3>
                    </li>
                )
                )}
            </ul>
    </div>
  )
}

export default MovieReviews