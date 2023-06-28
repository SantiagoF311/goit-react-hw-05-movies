import React, { useState } from 'react';
import { TrendingMovies } from 'Api/TrendingApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  return (
    <main>
      <h1>Hola</h1>
      <TrendingMovies setMovies={setMovies} />
      {console.log(movies)}
    </main>
  );
};

export default Home;
