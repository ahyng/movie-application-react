import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/DetailPage';
import './components/styles/MovieList.scss'
import MainPage from './components/MainPage';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/:id" element={<DetailPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
