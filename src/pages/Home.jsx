import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingMovies } from 'Api/TrendingApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  return (
    <main>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(({id, title, name}) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
        {console.log(movies)}
        
      </ul>

      <TrendingMovies setMovies={setMovies} />
    </main>
  );
};

export default Home;
