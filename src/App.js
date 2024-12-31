import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './components/DetailPage';
import './components/styles/MovieList.scss'
import MainPage from './components/MainPage';

function App() {
  
  return (
    <div className="App">
      <HashRouter>
      <Switch>
        <Route path="/" element={<MainPage/>} />
        <Route path="/:id" element={<DetailPage/>} />
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
