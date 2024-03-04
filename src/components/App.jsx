
import Home from "pages/Home/Home";
import Muvies from "pages/Muvies/Muvies";
import NotFound from "pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

export const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />            {/* домашня сторінка зі списком популярних кінофільмів. */}
          <Route path="movies" element={<Muvies />} />  {/* Пошук за ключовим словом */}
          {/* 
          '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
           /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
           /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails
 */}
        </Route>
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
};
