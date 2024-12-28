import React from 'react';
import MovieList from './components/MovieList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/DetailPage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/:id" element={<DetailPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
