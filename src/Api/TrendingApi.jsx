import axios from 'axios';
import { useEffect } from 'react';

export const TrendingMovies = ({ setMovies }) => {
  const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNWZiNWI1MmI2NGZkZjQ5NTk2MTRkNmVlNjk2MzY2MSIsInN1YiI6IjY0MmRmOWRmYTZhNGMxMDBmNDJjODBmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dh_81ToGYTWvWLZD2NmIMHPSCDMFiUURjqsMwgAMB-A'
    }
  };

  useEffect(() => {
    axios.get(url, options)
      .then(response => setMovies(response.data.results))
      .catch(error => console.error('Error fetching trending movies:', error));
  }, [setMovies]);

  return null;
};
