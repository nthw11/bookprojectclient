import React, {useContext} from 'react'
import UserContext from '../../contexts/user-context'
import Header from '../Blocks/Header'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../../images/bookshelf_logo.png'
import { StyledHome } from '../styles/LoginStyles'

const Home = () => {
  let userContext = useContext(UserContext)
  userContext = {}

  return (
    <div>
      <Header />
      <StyledHome>
        <div className='centerDiv'>
          <Link to={"/user/login"}>
          <img src={logo} alt="" />
          <h1>Welcome to Bookmonster</h1>
          <h3>Log in to get started</h3>
          </Link>
        </div>
      </StyledHome>
    </div>
  )
}

export default Home