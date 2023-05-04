import React, { useState } from 'react'
import { MoviesList } from '../presentation';
import { useMoviesList, useGenreData } from '../../hooks';

export const MovieListContainer = () => {
  const [isSelectedGenre, setIsSelectedGenre] = useState("");
  const { moviesData, loading, isError } = useMoviesList(isSelectedGenre);
  const { isGenreList } = useGenreData();
  return (
    <>
      <MoviesList
        data={moviesData.data}
        setIsSelectedGenre={setIsSelectedGenre}
        isSelectedGenre={isSelectedGenre}
        isGenreList={isGenreList}
      />
    </>
  )
}

