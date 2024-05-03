import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { PostPage } from './pages/PostPage/PostPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProfilePage } from './pages/Profile/ProfilePage';
import { SignupPage } from './pages/SignupPage/SignupPage';
import { NewpostPage } from './pages/NewpostPage/NewpostPage';
import { EditpostPage } from './pages/EditpostPage/EditpostPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';

import './App.scss';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('authToken'));

  return (
    <>
      <BrowserRouter>
        <Header isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* AUTH */}
          <Route path="/login" element={<LoginPage setIsUserLoggedIn={setIsUserLoggedIn} />} />
          <Route path="/sign-up" element={<SignupPage />} />

          {/* POST */}
          <Route path="/posts/:id" element={<PostPage />} />
          {isUserLoggedIn ? (
            <Route path="/new-post" element={<NewpostPage isUserLoggedIn={isUserLoggedIn} />} />
          ) : (
            <Route path="*" element={<NotFoundPage />} />
          )}
          <Route path="/edit-post" element={<EditpostPage />} />

          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
