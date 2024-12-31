import React from "react";
import { useState, useEffect } from "react";
import './styles/MovieList.scss'
import MovieList from "./MovieList";

const MainPage = () => {
    const [movieList, setMovieList] = useState(null);
  useEffect(() => {
    async function fetchMovies() {
      const items = await MovieList();
      setMovieList(items);
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <header>Movie List</header>
      <div className="MovieList">{movieList || <p>Loading...</p>}</div>
    </div>
  )
}

export default MainPage