import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Route, Routes, Navigate } from 'react-router-dom';


import { Button } from 'react-bootstrap'
import { MovieListContainer } from './pages/container';
import Header from './pages/Header';
import Tabs from './pages/presentation/Tabs';
import { MovieDetailContainer } from './pages/container/MovieDetailContainer';
import { EditMovieDetailContainer } from './pages/container';



function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route index element={<Navigate to="movie-app" replace />} />
          <Route  path='movie-app' element={<MovieListContainer />} />
          <Route path='movie/:id' element={<MovieDetailContainer />} />
          <Route path='movie/:id/edit' element={<EditMovieDetailContainer />} />
        </Routes>

    </>
  );
}

export default App;
