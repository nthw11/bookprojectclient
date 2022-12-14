import React, { useContext, useState }  from 'react'
import Header from '../Blocks/Header'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/user-context'
import { StyledLoginForm } from '../styles/LoginStyles'
import { StyledLoading } from '../styles/userHomeStyles'
import bookshelf_logo from '../../images/bookshelf_logo.png'
import ErrorBlock from '../Blocks/ErrorBlock'
import { set } from 'lodash'
const API = process.env.REACT_APP_BACKEND_API

const Login = () => {
  const [ isLoading, setLoading ] = useState(false)
  const [ errorTxt, setErrorTxt ] = useState("")
  const { register, handleSubmit, watch, formState: {errors} } = useForm()
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  

const loginHandler = async (data) => {
  setLoading(true)
  try{

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
    .then((userData) => {
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
  catch(error) {
    if(error.response){
      const errorMsg = error.response.data
      console.log(error)
      setErrorTxt(errorMsg)
      setLoading(false)

    } 
    // else if (error.request) {
    //   console.log(error.request)
    // } else {
    //   console.log(error.message)
    // }
  }
}
if(isLoading){
  return(
    <>
      <Header />
      <StyledLoading>
      <div className="fullPage">
        <h3>please wait</h3>
        <div className="spinner">
        <img src={bookshelf_logo} alt="loading" />
        </div>
        <h3>loading</h3>
      </div>
    </StyledLoading>
    </>
  )
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
    {
      errorTxt && (
      // <p className='errorMsg'>{errorTxt}</p>
      <ErrorBlock error={errorTxt} />
      )
    }
    </div>
  )
}

export default Login