import React, { useState,useEffect } from 'react';
import { MovieService } from '../services/moviesService';

export const useMovieData = (id) => {
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState('');
  const [movieRecord, setMovieRecord] = useState('');
  const getMovie = async () => {
    try {
        console.log("Hookksskskk");
      setLoading(true);
      const result = await MovieService.getMovie(id);
      console.log(result,"Hook DAta",id);
      setMovieRecord(result)
    } catch (error) {
      setLoading(false);
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(movieRecord,"movieData");
  return {movieRecord , loading, isError };
};
