import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Pages/Home';
import UserHome from './components/Pages/UserHome';
import SearchPage from './components/Pages/SearchPage'
import reportWebVitals from './reportWebVitals';
import BookDetailPage from './components/Pages/BookDetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<UserHome />} />
      <Route path='/search' element={<SearchPage /> }/>
      <Route path='/search/book' element={<BookDetailPage />} />
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
