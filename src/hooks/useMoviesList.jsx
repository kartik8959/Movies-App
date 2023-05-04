import React, { useState,useEffect } from 'react';
import { MovieService } from '../services/moviesService';

export const useMoviesList = (genre) => {
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState('');
  const [moviesData, setMoviesData] = useState('');
  const getMovies = async () => {
    try {
      setLoading(true);
      const result = await MovieService.moviesList(genre);
      setMoviesData(result)
    } catch (error) {
      setLoading(false);
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, [genre]);

  return {moviesData , loading, isError };
};
