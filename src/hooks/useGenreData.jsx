import React, { useState,useEffect } from 'react';
import { MovieService } from '../services/moviesService';

export const useGenreData = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setError] = useState('');
  const [isGenreList, setGenreList] = useState('');
  const getGenre = async () => {
    try {
      setLoading(true);
      const result = await MovieService.getGenre();
      console.log(result,"Hook DAta");
      setGenreList(result);
    } catch (error) {
      setLoading(false);
      setError(error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGenre();
  }, []);
  return {isGenreList , loading, isError };
};
