import React, {useContext, useEffect} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import {UserContext} from '../../contexts/user-context'
import logo from '../../images/bookshelf_logo.png'
import SearchContext from '../../contexts/search-context'
import { StyledHeader } from '../styles/headerStyles'

const Header = () => {
  const searchContext = useContext(SearchContext)
  const navigate = useNavigate()


const logoutHandler = () => {
  localStorage.removeItem("token")
}
const searchClickHandler = () => {
  searchContext.searchTerm = ''
  searchContext.startingPage = 0
}
const clubsHandler = () => {
  console.log('club me')
}
  

  return (
    <StyledHeader>
      <Link to={"/"}>
      <img src={logo} alt="bookmonster logo" />
      </Link>
          {localStorage.getItem("token") === null ?
      <Link to={"/user/login"}>
        <h1>Bookmonster</h1>
      </Link>
      :
      <Link to={"/user"}>
        <h1>Bookmonster</h1>
      </Link>
    }
      <nav>
        <ul>
          {localStorage.getItem("token") === null ?
          <div>
          <Link to={"/user/login"}>
          <li>Log In</li>
          </Link>
          <Link to={"/user/new-user"}>
            <li>New User</li>
          </Link>
          </div>
          :
          <div>
          <Link to={"/"} onClick={logoutHandler}>
          <li>
            Log Out
            </li>
          </Link>
          {/* onClick={searchClickHandler} */}
          <Link to={"/clubs"} onClick={clubsHandler} >
          <li>Clubs</li>
          </Link>
          <Link to={"/search"} onClick={searchClickHandler} >
          <li>Search Books</li>
          </Link>
          </div>
          }
          {/* <Link to={"/search/club"}>
            <li>Search Clubs</li>
          </Link> */}
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header