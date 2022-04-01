import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainIndex from './container/main/mainIndex';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NotFoundPage from './container/404/NotFoundPage';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<MainIndex />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
