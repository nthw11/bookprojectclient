import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'
import SearchBar from './SearchBar';

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`
const StyledNav = styled.nav`
  background-color: #bbb;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`


const Header = () => {
  return (
    <StyledNav>
      <h2>HEADER/LOGO</h2>
      <ul>
        <li>
          <NavLink to={'/'}>Main Home</NavLink>
        </li>
        <li>
          <NavLink to={'/home'}>User Home</NavLink>
        </li>
      </ul>
      <SearchBar />
      {/* <hr /> */}
    </StyledNav>
  )
}

export default Header