import React, {useRef, useContext} from 'react'
import styled from 'styled-components'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserContext from '../../contexts/user-context'
const API = process.env.REACT_APP_BACKEND_API

const StyledModal = styled.div`
  position: absolute;
  margin: 25px;
  padding: 25px;
  background-color: #fbeef1;
  min-height: 50vh;
  width: 40vw;
  z-index: 10;
  border-radius: 10px;
  box-shadow: 2px 3px;
  border: none;
  top: 250px;
  left: 25vw;
`

const UserUpdateModal = ({openModal, setOpenModal}) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const userContext = useContext(UserContext)
  const modalRef = useRef()
  // const closeModal = (e) => {
  //   if(modalRef.current === e.target){
  //     setOpenModal(false)
  //   }
  // }

  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = async (data) => {
    const { firstname, lastname, email, phone } = data
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
      console.log(userData.data)
      userContext._id = userData.data.user._id
      userContext.firstname = userData.data.user.firstname
      userContext.lastname = userData.data.user.lastname
      userContext.email = userData.data.user.email
      userContext.phone = userData.data.user.phone
      console.log(userData.data)
      console.log(userContext)
      // localStorage.setItem("token", userData.data.token)
      return navigate('/user')
    })
    setOpenModal(prev=> !prev)
  }


  return (
  <>
      {openModal ? 
  (<StyledModal>
      <button onClick={() => setOpenModal(prev=> !prev)}>x</button>

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
      </StyledModal>
  )
      : null
    }
  </>
)
}

export default UserUpdateModal