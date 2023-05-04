import React from 'react';
import { MovieDetail } from '../presentation';
import { useMovieData } from '../../hooks';
import { useParams } from 'react-router-dom';

export const MovieDetailContainer = (props) => {
  const {id} = useParams();
  const { movieRecord, loading, isError } = useMovieData(id);
  
  const onUpdateMovieSubmit = () =>{

  }
  return (
    <>
      <MovieDetail
        data={movieRecord?.data}
        loading={loading}
        isError={isError}
        movie={props.movieDetail}
      />
    </>
  )
}

