import axios from 'axios';
import { useEffect, useState } from 'react';
const api_key = process.env.REACT_APP_MOVIE_API_KEY;

const genre = async () => {
  const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
  const response = await axios.get(url);
  return response.data.genres
}

const fetchData = async () => {
  const api_key = process.env.REACT_APP_MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
  const response = await axios.get(url);
  
  const movieList = response.data.results.map((data, index) => {
    let img_src = `https://image.tmdb.org/t/p/w300${data.poster_path}`
     return (
     <li key={index}>{data.title}<br/>
      {data.release_date}<br/>
      <img src={img_src}/>
     </li>
     )
  })
  console.log(response.data)
  console.log(genre());
  return <ul>{movieList}</ul>
}

function App() {
  // const api_key = process.env.REACT_APP_MOVIE_API_KEY;

  const [movieList, setMovieList] = useState(null);
  useEffect(() => {
    async function fetchMovies() {
      const items = await fetchData();
      setMovieList(items);
    }
    fetchMovies();
  }, []);
  
  return (
    <div className="App">
      <header>Movie List</header>
      <div>{movieList || <p>Loading...</p>}</div>
    </div>
  );
}

export default App;
