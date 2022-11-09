import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

const Header = () => {
  return (
    <StyledHeader>
      <h1>Book Club App</h1>
      <nav>
        <ul>
          <Link to={"/"}>
          <li>
            Log Out
            </li>
          </Link>
          <Link to={"/user/new-user"}>
            <li>New User</li>
          </Link>
          <Link to={"/user"}>
          <li>Log In</li>
          </Link>
          <Link to={"/search"}>
          <li>Search Books</li>
          </Link>
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