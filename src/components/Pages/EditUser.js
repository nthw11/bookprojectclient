import React, { useContext} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Header from '../Blocks/Header'
import UserContext from '../../contexts/user-context'
import { StyledLoginForm } from '../styles/LoginStyles'

const API = process.env.REACT_APP_BACKEND_API

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
      <StyledLoginForm>
        <h1>Edit User Info</h1>
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
      </StyledLoginForm>
    </div>
  )
}

export default EditUser