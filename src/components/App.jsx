
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Movies from "pages/Movies/Movies";
import MovieCard from "pages/MovieCard/MovieCard";
import MovieCast from "pages/MovieCard/MovieCast";
import MovieReviews from "pages/MovieCard/MovieReviews";

export const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieCard />} >
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
            </Route>
        </Route>
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
};
