import axios from 'axios';
import './styles/MovieList.scss'
const api_key = process.env.REACT_APP_MOVIE_API_KEY;

const fetchData = async () => {
  const api_key = process.env.REACT_APP_MOVIE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`
  const response = await axios.get(url);
  
  const movieList = response.data.results.map((data, index) => {
    let img_src = `https://image.tmdb.org/t/p/w300${data.poster_path}`
     return (
     <li className='items' key={index}>
     <img src={img_src}/>
     <p className='title'>{data.title}</p>
     </li>
     )
  })
  console.log(response.data)
  return <ul className='movieListBox'>{movieList}</ul>
}

export default fetchData