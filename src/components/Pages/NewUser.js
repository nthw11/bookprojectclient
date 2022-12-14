import React, {useState, useContext} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Header from '../Blocks/Header'
import UserContext from '../../contexts/user-context'
import { StyledLoginForm } from '../styles/LoginStyles'
import ErrorBlock from '../Blocks/ErrorBlock'
import bookshelf_logo from '../../images/bookshelf_logo.png'

const API = process.env.REACT_APP_BACKEND_API

const NewUser = () => {
  const userContext = useContext(UserContext)
  const [ isLoading, setLoading ] = useState(false)
  const navigate = useNavigate()
  const [ errorTxt, setErrorTxt ] = useState("")
  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = async (data) => {
    setLoading(true)
    try{
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
  catch(error){
    console.log(error)
    if(error.response){
      const errorMsg = error.response.data
      console.log(errorMsg)
      setErrorTxt(errorMsg)
      setLoading(false)
    }
  }
  }
  return (
    <div>
      <Header />
      { errorTxt && (
      <ErrorBlock error={errorTxt} />
      )
      }
      <StyledLoginForm>
        <h1>Register</h1>
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
      </StyledLoginForm>

    </div>
  )
}

export default NewUser