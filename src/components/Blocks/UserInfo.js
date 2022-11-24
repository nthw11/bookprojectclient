import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AvatarGenerator } from 'random-avatar-generator'
import {MdSettingsApplications} from 'react-icons/md'

const StyledUserInfo = styled.div`
max-width: 80vw;
display: grid;
grid-template-columns: 4(1fr 1fr 2fr 1fr);
grid-template-rows: 2;
background-color: #ebf9ff;
border-radius: 10px;
border: none;
height: auto;
padding: 15px 10vw;
margin: 15px;
color: #32292f;
font-family: 'oxygen-Regular';

.userName{
  grid-column: 1 / 3;
  grid-row: 1;
}
.userImg{
  grid-column: 3 / 4;
  grid-row: 1;
}
img{
  grid-row: 1;
  max-width: 150px;
}
.settings{
  grid-row: 1;
  grid-column: 4 / 5;
  color: blue;
  font-size: 2em;
  cursor: pointer;

}

`

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