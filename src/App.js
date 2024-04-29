import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';

import './App.scss';
import { PostPage } from './pages/PostPage/PostPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post" element={<PostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
