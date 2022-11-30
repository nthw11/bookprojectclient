//React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';

//Pages
import Home from './components/Pages/Home';
import UserHome from './components/Pages/UserHome';
import SearchPage from './components/Pages/SearchPage'
import reportWebVitals from './reportWebVitals';
import SearchBookDetailPage from './components/Pages/SearchBookDetailPage';
import LibraryBookDetailPage from './components/Pages/LibraryBookDetailPage';
import SearchClubDetailPage from './components/Pages/SearchClubDetailPage';
import Login from './components/Pages/Login';
import EditUser from './components/Pages/EditUser';
import NewUser from './components/Pages/NewUser';
import ClubPage from './components/Pages/ClubPage';
import ClubsHome from './components/Pages/ClubsHome';

//Contexts
import UserContext from './contexts/user-context';
import SearchContext from './contexts/search-context';
import SingleBookContext from './contexts/singleBook-context';
import ClubContext from './contexts/club-context';
import initialSingleBookContext from './contexts/initialSingleBook-context';
import initialUserContext from './contexts/initialUser-context';
import initialSearchContext from './contexts/initialSearch-context'
import initialClubContext from './contexts/initialClub-context';

//Fonts
import "./App.css";
import "./fonts/Format_1452.woff";
import "./fonts/Oxygen-Bold.ttf"
import "./fonts/Oxygen-Light.ttf"
import "./fonts/Oxygen-Regular.ttf"
import "./fonts/Exo2-Italic-VariableFont_wght.ttf"
import "./fonts/Exo2-VariableFont_wght.ttf"
import "./fonts/Solway-Bold.ttf"
import "./fonts/Solway-ExtraBold.ttf"
import "./fonts/Solway-Light.ttf"
import "./fonts/Solway-Medium.ttf"
import "./fonts/Solway-Regular.ttf"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContext.Provider value={ initialSearchContext}>
      <ClubContext.Provider value={ initialClubContext }>
  <UserContext.Provider value={ initialUserContext }>
    <SingleBookContext.Provider value= { initialSingleBookContext } >
    <BrowserRouter>
      <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<UserHome />} />
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/new-user' element={<NewUser />} />
          <Route path='/user/update-user' element={<EditUser />} />
          <Route path='/user/book/:bookId' element={<LibraryBookDetailPage />} />
          <Route path='/search' element={<SearchPage /> } />
          <Route path='/search/book/:bookId' element={<SearchBookDetailPage />} />
          <Route path='/search/club/:clubId' element={<SearchClubDetailPage />} />
          <Route path='/clubs' element={<ClubsHome />} />
          <Route path='/clubs/:clubId' element={<ClubPage />} />
        </Routes>
      </BrowserRouter>
      </SingleBookContext.Provider>
    </UserContext.Provider>
    </ClubContext.Provider>
    </SearchContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
