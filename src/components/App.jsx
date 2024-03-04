
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Movies from "pages/Movies/Movies";
import MovieCard from "pages/MovieCard/MovieCard";

export const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieCard/>} />

        </Route>
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
};
