import React,{useContext}  from 'react'
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
    userContext._id = userData.data._id
      userContext.username = userData.data.username
      userContext.firstname = userData.data.firstname
      userContext.lastname = userData.data.lastname
      userContext.email = userData.data.email
      userContext.phone = userData.data.phone
      userContext.avatarUrl = userData.data.avatarUrl
      userContext.contacts = userData.data.contacts
      userContext.blockedContacts = userData.data.blockedContacts
      userContext.clubs = userData.data.clubs
      userContext.allBooks = userData.data.allBooks
      userContext.currentlyReading = userData.data.currentlyReading
      userContext.finishedReading = userData.data.finishedReading
      userContext.upNext = userData.data.upNext
      userContext.bookshelves = userData.data.bookShelves
      userContext.tags = userData.data.tags
      localStorage.setItem("auth-token", userData.data.token)
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