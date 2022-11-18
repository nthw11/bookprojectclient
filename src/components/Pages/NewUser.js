import React, {useState, useContext} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Header from '../Blocks/Header'
import styled from 'styled-components'
import UserContext from '../../contexts/user-context'

const API = process.env.REACT_APP_BACKEND_API

const StyledNewUserForm = styled.div`
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
.loginOption {
  background-color: #00648d;
  
}
`

const NewUser = () => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()
  
  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = async (data) => {
    const {username, firstname, lastname, email, phone, password} = data
    const config = {
      method: 'post',
      data: {
        username,
        firstname,
        lastname,
        email,
        phone,
        password
      },
      url: `${API}/login/register`
    }
    await axios(config).then((userData) => {
      console.log(userData.data)
      userContext._id = userData.data.user._id
      userContext.username = userData.data.user.username
      userContext.firstname = userData.data.user.firstname
      userContext.lastname = userData.data.user.lastname
      userContext.email = userData.data.user.email
      userContext.phone = userData.data.user.phone
      console.log(userData.data)
      console.log(userContext)
      localStorage.setItem("token", userData.data.token)
    })
    return navigate("/user")


  }

  return (
    <div>
      <Header />
      
      <StyledNewUserForm>
        <h1>Register</h1>
      {/* <form onSubmit={createNewUserHandler}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='username'>Username</label>
        <input type="text" placeholder='username' {...register('username', {required: true, minLength: 4, maxLength: 20})} />
        
        <label>First Name</label>
        <input type="text" placeholder='First Name' {...register("firstname", {required: true})} />
        
        <label>Last Name</label>
        <input type="text" placeholder='Last Name' {...register('lastname', {required: true})} />
        
        <label>Email</label>
        <input type="email" placeholder='Email Address' {...register('email', {required: true}) } />

        <label>Phone</label>
        <input type="tel" placeholder='Phone Number' {...register('phone')}/>

        <label>Password</label>
        <input type="password" name='password' required placeholder='Password' {...register('password', {required: true, minLength: 4})} />
        
        <button value="submit" type="submit">Create New User</button>

      </form>
      <p className='or'>- or -</p>
      <Link to={"/user/login"}>
        <button className='loginOption'>Log In</button>
      </Link>
      </StyledNewUserForm>
    </div>
  )
}

export default NewUser