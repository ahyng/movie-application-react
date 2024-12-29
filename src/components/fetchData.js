import axios from 'axios';
import './styles/MovieList.scss'
import { Link } from 'react-router-dom';
const api_key = process.env.REACT_APP_MOVIE_API_KEY;

const fetchData = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=ko-KR`
  const response = await axios.get(url);
  
  const movieList = response.data.results.map((data, index) => {
    let img_src = `https://image.tmdb.org/t/p/w300${data.poster_path}`
     return (
     <Link to={`/${data.id}`} className='items' key={index}>
     <img src={img_src}/>
     <p className='title'>{data.title}</p>
     <span>⭐ {data.vote_average}</span>
     </Link>
     )
  })
  console.log(response.data)
  return <div className='movieListBox'>{movieList}</div>
}

export default fetchData