import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import MovieTabs from './Tabs';


export const MoviesList = (props) => {
  return (
    <>
    <MovieTabs
    setIsSelectedGenre = {props.setIsSelectedGenre}
    isGenreList = {props.isGenreList}
    />
      <div className=" text-center">
        <div className="row m-1">
            {
              props?.data?.map((movie) => (
                <div className="col col-3" key={movie.id}>
                  <div className="card m-2" style={{ width: '20rem' }}>
                    <Link to={`/movie/${movie.id}`}>
                      <img src={movie.poster_url} className="card-img-top" style={{height:'500px'}} alt={movie.poster_url} />
                    </Link>
                    <div className="card-body d-flex justify-content-between">
                      <Link style={{width:"80%"}} to={`/movie/${movie.id}`}>
                      <p className="card-text  text-truncate">{movie.title}</p>
                      </Link>
                      <p className="card-text">
                        <IconContext.Provider value={{ color: 'red' }}>
                          <FaHeart className='ms-1' /> {movie.rating}
                        </IconContext.Provider>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </>
  )
}

