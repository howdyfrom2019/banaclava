import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainIndex from './container/main/mainIndex';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
