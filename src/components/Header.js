import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`
const StyledNav = styled.nav`
  background-color: #bbb;
`


const Header = () => {
  return (
    <StyledNav>
      <h2>HEADER</h2>
      <ul>
        <li>
          <NavLink to={'/'}>Main Home</NavLink>
        </li>
        <li>
          <NavLink to={'/home'}>User Home</NavLink>
        </li>
      </ul>
      <hr />
    </StyledNav>
  )
}

export default Header