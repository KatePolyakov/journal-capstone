import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth';

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { FullpostPage } from './pages/FullpostPage/FullpostPage';
import { AddPost } from './pages/AddPost/AddPost';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { SignupPage } from './pages/SignupPage/SignupPage';

import './App.scss';

function App() {
  const dispatch = useDispatch();
  //const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<FullpostPage />} />
        <Route path="/posts/:id/edit" element={<AddPost/>} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignupPage />} />
      </Routes>
    </>
  );
}

export default App;
