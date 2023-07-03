import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const MoviesDetails = lazy(() => import('../pages/MoviesDetails'))
const Cast = lazy(() => import('../components/Cast'))
const Review = lazy(() => import('../components/Reviews'))

export const App = () => {
  return (
    
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />} >
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MoviesDetails />} >
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Review />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
   
  );
}

