import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';

import './App.scss';
import { PostPage } from './pages/PostPage/PostPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { NewpostPage } from './pages/NewpostPage/NewpostPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* AUTH */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          
          {/* POST */}
          <Route path="/post" element={<PostPage />} />
          <Route path="/new-post" element={<NewpostPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
