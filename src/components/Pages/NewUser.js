import React, {useState, useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Header from '../Blocks/Header'
import styled from 'styled-components'
import UserContext from '../../contexts/user-context'

const API = process.env.REACT_APP_BACKEND_API

const StyledNewUserForm = styled.div`
max-width: 40vw;
margin: 20px;
border: 1px solid black;
border-radius: 10px;
padding: 20px;


input{
  display: block;
}  

button{
  margin-top: 25px;
  background-color: #bb2200;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}
`

const NewUser = () => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()
  
  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = async data => {
    const {username, firstname, lastname, email, phone, avatarUrl, password} = data
    const config = {
      method: 'post',
      data: {
        username,
        firstname,
        lastname,
        email,
        phone,
        avatarUrl,
        password
      },
      url: `${API}/login/register`
    }
    await axios(config).then((userData) => {
      userContext._id = userData.data.user._id
      userContext.username = userData.data.user.username
      userContext.firstname = userData.data.user.firstname
      userContext.lastname = userData.data.user.lastname
      userContext.email = userData.data.user.email
      userContext.phone = userData.data.user.phone
      userContext.avatarUrl = userData.data.user.avatarUrl
      console.log(userData.data.user)
      console.log(userContext)
    })
    return navigate("/user")


  }

  return (
    <div>
      <Header />
      
      <StyledNewUserForm>
        <h1>Register new user</h1>
      {/* <form onSubmit={createNewUserHandler}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Username</label>
        <input type="text" placeholder='username' {...register('username', {required: true, minLength: 4, maxLength: 20})} />
        
        <label>First Name</label>
        <input type="text" placeholder='First Name' {...register("firstname", {required: true})} />
        
        <label>Last Name</label>
        <input type="text" placeholder='Last Name' {...register('lastname', {required: true})} />
        
        <label>Email</label>
        <input type="email" placeholder='Email Address' {...register('email', {required: true}) } />

        <label>Phone</label>
        <input type="tel" placeholder='Phone Number' {...register('phone')}/>

        <label>Avatar Url</label>
        <input type="text" placeholder='Link to an image for your avatar' {...register('avatarUrl')} />

        <label>Password</label>
        <input type="password" name='password' required placeholder='Password' {...register('password', {required: true, minLength: 4})} />
        
        <button value="submit" type="submit">Create New User</button>

      </form>
      </StyledNewUserForm>
    </div>
  )
}

export default NewUser