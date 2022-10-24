import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import store from "./store"
import './index.css';
import App from './App';
import Home from './components/Pages/Home';
import UserMainPage from './components/Pages/UserMainPage';
import NotFound from './components/Pages/NotFound';
import BookDetail from './components/Pages/BookDetail';
import SearchPage from './components/Pages/SearchPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>

    <BrowserRouter>
    <Routes>
    {/* <Route path="/" element={<App />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<UserMainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/book/:bookId" element={<BookDetail />} />
      <Route page="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>

  // </Provider>
);

