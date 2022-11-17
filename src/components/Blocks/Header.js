import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserContext from '../../contexts/user-context'
import { initialUserContext } from '../..'
import logo from '../../images/bookshelf_logo.png'

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

const logoutHandler = () => {
  localStorage.removeItem("token")
}

const Header = () => {
  const userContext = useContext(UserContext)
// console.log(userContext)
  return (
    <StyledHeader>
      <img src={logo} alt="bookmonster logo" />
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
          <Link to={"/search"}>
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