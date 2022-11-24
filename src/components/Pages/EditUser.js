import React, {useState, useContext} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Header from '../Blocks/Header'
import styled from 'styled-components'
import UserContext from '../../contexts/user-context'

const API = process.env.REACT_APP_BACKEND_API

const StyledEditUserForm = styled.div`
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
.smallButtonText{
  display: block;
  font-family: "oxygen-Light";
  font-style: italic;
  font-weight: lighter;
}
`

const EditUser = () => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = async (data) => {
    const { firstname, lastname, email, phone} = data
    const config = {
      method: 'put',
      headers: headers,
      data: {
        firstname,
        lastname,
        email,
        phone,
      },
      url: `${API}/user/${userContext._id}`
    }
    await axios(config).then((userData) => {
      userContext.firstname = userData.data.firstname
      userContext.lastname = userData.data.lastname
      userContext.email = userData.data.email
      userContext.phone = userData.data.phone
    })
    return navigate("/user")


  }

  return (
    <div>
      <Header />
      
      <StyledEditUserForm>
        <h1>Edit User Info</h1>
      {/* <form onSubmit={createNewUserHandler}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input type="text" placeholder='First Name' {...register("firstname")} />
        
        <label>Last Name</label>
        <input type="text" placeholder='Last Name' {...register('lastname')} />
        
        <label>Email</label>
        <input type="email" placeholder='Email Address' {...register('email') } />

        <label>Phone</label>
        <input type="tel" placeholder='Phone Number' {...register('phone')}/>
        
        <button value="submit" type="submit">Update User</button>

      </form>
      <p className='or'>- or -</p>
      <Link to={"/user"}>
        <button className='loginOption'>Back to user home <span className='smallButtonText'>(changes will be lost)</span></button>
      </Link>
      </StyledEditUserForm>
    </div>
  )
}

export default EditUser