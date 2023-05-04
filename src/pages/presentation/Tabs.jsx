
import React from 'react';
import { Link } from 'react-router-dom';

const MovieTabs = ({ setIsSelectedGenre, isGenreList }) => {

  // To capture selected list item value
  const getGenre = (e) => {
    setIsSelectedGenre(e.target.innerText);
  }
  
  return (
    <>
      <ul className="nav nav-tabs" >
        <li className="nav-item">
          <Link className="nav-link active" to="/">Movies</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to={{}} role="button" aria-expanded="false">Movies by Genre</Link>
          <ul className="dropdown-menu">
            {
              isGenreList?.data?.map((genre, i) => (
                <li key={i} onClick={getGenre}> <Link class="dropdown-item" href={{}}>{genre}</Link></li>
              ))
            }
          </ul>
        </li>
      </ul>
    </>
  )
}

export default MovieTabs;





