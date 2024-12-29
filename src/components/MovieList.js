import React from "react";
import { useState, useEffect } from "react";
import fetchData from "./fetchData";
import './styles/MovieList.scss'

const MovieList = () => {
    const [movieList, setMovieList] = useState(null);
  useEffect(() => {
    async function fetchMovies() {
      const items = await fetchData();
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

export default MovieList