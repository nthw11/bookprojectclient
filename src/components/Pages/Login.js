import React, { useContext }  from 'react'
import Header from '../Blocks/Header'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/user-context'

const API = process.env.REACT_APP_BACKEND_API

const StyledLoginForm = styled.div`
`

const Login = () => {
  const { register, handleSubmit, watch, formState: {errors} } = useForm()
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

const loginHandler = async (data) => {
  const {username, password} = data
  const config = {
    method: 'post',
    data: {
      username, 
      password
    }, 
    url: `${API}/login`
  }
  await axios(config).then((userData) => {
    console.log(userData)
      userContext._id = userData.data.user._id
      userContext.username = userData.data.user.username
      userContext.firstname = userData.data.user.firstname
      userContext.lastname = userData.data.user.lastname
      userContext.email = userData.data.user.email
      userContext.phone = userData.data.user.phone
      userContext.avatarUrl = userData.data.user.avatarUrl
      userContext.contacts = userData.data.user.contacts
      userContext.blockedContacts = userData.data.user.blockedContacts
      userContext.clubs = userData.data.user.clubs
      userContext.allBooks = userData.data.user.allBooks
      userContext.currentlyReading = userData.data.user.currentlyReading
      userContext.finishedReading = userData.data.user.finishedReading
      userContext.upNext = userData.data.user.upNext
      userContext.bookshelves = userData.data.user.bookShelves
      userContext.tags = userData.data.user.tags
      localStorage.setItem("token", userData.data.token)
    })
    return navigate("/user")
}

  return (
    <div>
    <Header />

    <StyledLoginForm>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(loginHandler)}>
        <label>username</label>
        <input type="text" placeholder='username' {...register('username', {required: true})} />
        <label>password</label>
        <input type="password" placeholder='password' {...register('password', {required: true})} />
        <button value='submit' type='submit'>Login</button>
      </form>
    </StyledLoginForm>
    </div>
  )
}

export default Login