import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Pages/Home';
import UserHome from './components/Pages/UserHome';
import SearchPage from './components/Pages/SearchPage'
import reportWebVitals from './reportWebVitals';
import SearchBookDetailPage from './components/Pages/SearchBookDetailPage';
import LibraryBookDetailPage from './components/Pages/LibraryBookDetailPage';
import SearchClubDetailPage from './components/Pages/SearchClubDetailPage';
import NewUser from './components/Pages/NewUser';
import ClubPage from './components/Pages/ClubPage';
import UserContext from './contexts/user-context';
import Login from './components/Pages/Login';
import "./App.css";
import "./fonts/Format_1452.woff";
import "./fonts/Oxygen-Bold.ttf"
import "./fonts/Oxygen-Light.ttf"
import "./fonts/Oxygen-Regular.ttf"
import SearchContext from './contexts/search-context';

export const initialUserContext = {
  _id: '',
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  contacts:[],
  blockedContacts: [],
  clubs: [],
  allBooks: [],
  currentlyReading: {},
  finishedReading: [],
  upNext: [],
  bookshelves: [],
  tags: []
}
export const initialSearchContext = {
  searchTerm: '', 
  startingPage:0
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContext.Provider value={ initialSearchContext}>
  <UserContext.Provider value={ initialUserContext }>
    <BrowserRouter>
      <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<UserHome />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/new-user' element={<NewUser />} />
          <Route path='/user/book/:bookId' element={<LibraryBookDetailPage />} />
          <Route path='/search' element={<SearchPage /> } />
          <Route path='/search/book/:bookId' element={<SearchBookDetailPage />} />
          <Route path='/search/club/:clubId' element={<SearchClubDetailPage />} />
          <Route path='/clubs/:clubId' element={<ClubPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </SearchContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
