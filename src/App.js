import axios from 'axios';

function App() {
  const api_key = process.env.REACT_MOVIE_API_KEY;

  const fetchData = async () => {
    const options = {
      headers : {
          Authorization : process.env.REACT_MOVIE_AUTHORIZATION
      }
    }
    const {data, status} = await axios.get('https://api.themoviedb.org/3/movie/now_playing', options)

    console.log(data)
  }

  fetchData();


  return (
    <div className="App">
      <header>Movie List</header>
    </div>
  );
}

export default App;
