import React, { useContext }  from 'react'
import Header from '../Blocks/Header'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/user-context'

const API = process.env.REACT_APP_BACKEND_API

const StyledLoginForm = styled.div`
  max-width: 40vw;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 10px;
  border: none;
  padding: 20px;
  background-color: #fadec6 ;
  color: #32292f;

  h1{
  font-size: 3em;
  font-family: "format_1452";
}

label{
  font-family: "format_1452";
  margin-left: 2vw;
  
}

input{
  background-color: #e7f4ff;
  color: #00648d;
  font-family: 'oxygen-Light';
  display: block;
  height: 35px;
  margin: 10px auto;
  padding-left: 15px;
  width: 35vw;
  border-radius: 10px;
  border: none;
}  

button{
  font-family: "oxygen-Regular";
  margin: 25px 25px 0 25px;
  background-color: #bb2200;
  padding: 10px;
  width: 15vw;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  
}
.or{
  font-family: "oxygen-Bold";
  font-style: italic;
  margin-left: 150px;
}
.registerOption{
  background-color: #00648d;
}
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
  await axios(config)
  .catch(function (error) {
    if(error.response){
      console.log(error.response)
      const errorMsg = error.response.data
      alert(errorMsg)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log(error.message)
    }
  })
  .then((userData) => {
     
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loginHandler)}>
        <label>username</label>
        <input type="text" placeholder='username' {...register('username', {required: true})} />
        <label>password</label>
        <input type="password" placeholder='password' {...register('password', {required: true})} />
        <button value='submit' type='submit'>Login</button>
      </form>
      <p className='or'>-or-</p>
      <Link to={"/user/new-user"}>
      <button className='registerOption'>Register</button>
      </Link>
    </StyledLoginForm>
    </div>
  )
}

export default Login