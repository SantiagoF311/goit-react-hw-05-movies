import React, { useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { MovieDetailsApi } from 'Api/MovieDetailsApi';

const MoviesDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  return (
    <main>
      <h1>Hola</h1>
      {console.log(id)}
      {console.log(movieDetails)}
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title} />
          <p>Vote Average: {parseFloat(movieDetails.vote_average.toFixed(1))}</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Link to='cast'>Cast</Link>
      <Link to='reviews'>Reviews</Link>
      <Outlet />
      <MovieDetailsApi movieId={id} setMovieDetails={setMovieDetails} />
    </main>
  );
};

export default MoviesDetails;
