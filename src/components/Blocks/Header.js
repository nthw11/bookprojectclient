import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import UserContext from '../../contexts/user-context'
import { initialUserContext } from '../..'

const StyledHeader = styled.div`
padding: 20px;

ul{
  display: flex;
  justify-content: space-evenly;
}

li{
  list-style: none;
  color: #bb2200;
  text-decoration: none;

}
a{
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5em;
}
`

const logoutHandler = () => {
  localStorage.removeItem("token")
}

const Header = () => {
  const userContext = useContext(UserContext)
console.log(userContext)
  return (
    <StyledHeader>
      <h1>Book Club App</h1>
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
      <hr />
    </StyledHeader>
  )
}

export default Header