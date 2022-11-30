import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AvatarGenerator } from 'random-avatar-generator'
import {MdSettingsApplications} from 'react-icons/md'
import {StyledUserInfo} from '../styles/userHomeStyles'


const UserInfo = (user) => {

  const generator = new AvatarGenerator() 
  const navigate = useNavigate()

  const updateUserInfoHandler = () => {
    // setOpenModal(prev => !prev)
    navigate('/user/update-user')
  }
  

  return (
    <>

    <StyledUserInfo>
      <MdSettingsApplications className='settings' title="Edit user info"  onClick={updateUserInfoHandler} />
      <div className="userName">
      <h2 title='User first and last name'>{user.user.firstname} {user.user.lastname}</h2>
      <h3 title='username'>{user.user.username}</h3>
      <h3 title='email'>{user.user.email}</h3>
      <h3 title='phone number'>{user.user.phone}</h3>
      </div>
      <div className="userImg">
      <img src={generator.generateRandomAvatar(`${user.user._id}`)} title='this is EXACTLY what the user looks like'></img>

      </div>
    </StyledUserInfo>
    </>
  )
}

export default UserInfo