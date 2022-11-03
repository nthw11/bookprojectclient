import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Header from '../Blocks/Header'
import styled from 'styled-components'

const API = process.env.REACT_APP_BACKEND_API

const StyledNewUserForm = styled.div`
  
`

const NewUser = () => {
  const navigate = useNavigate()
  const [newUser, setNewUser] = useState('')
  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const createNewUserHandler = async (e) =>{
    e.preventDefault()
    console.log(e)
  }
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
      url: `${API}/user`
    }
    await axios(config).then((userData) => {
      console.log(userData)
    }).then(response => {
      if(response.status === 200){
        return navigate("/user")
      }
    })

  }

  return (
    <div>
      <Header />
      <h2>New User Page</h2>
      <StyledNewUserForm>
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