import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchApi } from "Api/SearchApi";

const Movies = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [movieData, setMovieData] = useState([]);

  const handleInputChange = (event) => {
    setMovieSearch(event.target.value);
  }

  return (
    <main>
      <div>
        <input type="text" value={movieSearch} onChange={handleInputChange} />
      </div>

      <div>
        {movieData && movieData.results?.length > 0 ? (
          <ul>
            {movieData.results.map(({ id, title, name }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title || name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            {movieData?.results?.length === 0
              ? 'No hay resultados para esta búsqueda'
              : 'Loading...'}
          </p>
        )}
      </div>

      <SearchApi movieSearh={movieSearch} setMovieData={setMovieData}/>
    </main>
  );
}

export default Movies;
