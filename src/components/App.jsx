
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Movies from "pages/Movies/Movies";
import MovieCard from "pages/MovieCard/MovieCard";
import MovieCast from "pages/MovieCard/MovieCast";
import MovieReviews from "pages/MovieCard/MovieReviews";
import Register from "pages/Register/Register";
import { useContext } from "react";
import { MyContext } from "context/ContextProvider";

export const App = () => {

  const { isLoggedIn } = useContext(MyContext);
  return isLoggedIn ? <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="movies" element={<Movies />} />
          

      <Route path="movies/:movieId" element={<MovieCard />} >
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Route>
          
    </Route>
        
    <Route path="*" element={<NotFound />} />

  </Routes> :
    <Routes>
      <Route path="register" element={<Register />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={<Navigate to = '/register'/>} />

    </Routes>
  
};
