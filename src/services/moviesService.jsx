import axios from 'axios';

const movieBasePath = axios.create({
	baseURL: process.env.REACT_APP_API_PATH,
});

// API Call

export class MovieService
{
  static moviesList = async(genre) =>{
    console.log(!genre,"genre service");
    const response = !genre ? await movieBasePath.get('/movies') : 
    await movieBasePath.get(`/movies?q=${genre}`);
    return response;   
  }

  static getMovie = async (id) => {
    const response = await movieBasePath.get(`/movies/${id}`);
    return response;
  }

  static getGenre = async (id) => {
    const response = await movieBasePath.get(`/genre`);
    return response;
  }

  static updateMovieInfo = async (id,movieInfo) => {
    const response = await movieBasePath.put(`/movies/${id}/`,movieInfo);
    return response;
  }
  
}
  
 