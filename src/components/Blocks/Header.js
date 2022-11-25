import React, {useContext, useEffect} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import UserContext from '../../contexts/user-context'
import { initialSearchContext, initialUserContext } from '../..'
import logo from '../../images/bookshelf_logo.png'
import SearchContext from '../../contexts/search-context'

const StyledHeader = styled.div`

font-family: "format_1452";
max-width: 100vw;
display: flex;
justify-content: space-between;
margin: auto;
/* background-color: #f0bcc5; */
background-color: #d6f3ff;
z-index: 10;

h1{
  color: #00648d;
  font-size: 2.5em;
}

img{
  margin: 25px;
  height: 75px;
}
nav{
  
}

ul{
  margin-right: 35px;
}

li{
  list-style: none;
  color: #32292f;
  text-decoration: none;
  padding-top: 20px;
}
a{
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  text-align: right;
}
`
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

// console.log(userContext)
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
          <Link to={"/user/new-user"}>
            <li>New User</li>
          </Link>
          <Link to={"/user/login"}>
          <li>Log In</li>
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