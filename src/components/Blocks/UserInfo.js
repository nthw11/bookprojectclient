import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AvatarGenerator } from 'random-avatar-generator'


const StyledUserInfo = styled.div`
width: 50vw;
display: grid;
grid-template-columns: 3;
background-color: #ebf9ff;
border-radius: 10px;
border: none;
height: 200px;
padding: 15px;
margin: 15px;
color: #32292f;
font-family: 'oxygen-Regular';

.userName{
  grid-column: 1 / 3;
}
.userImg{
  grid-column: 3 / 4;
}
img{
  max-width: 200px;
}
`

const UserInfo = (user) => {
  const generator = new AvatarGenerator() 
  
  console.log(user)
  return (
    <StyledUserInfo>
      <div className="userName">
      <h2>{user.user.firstname} {user.user.lastname}</h2>
      <h3>{user.user.username}</h3>
      <h3>{user.user.email}</h3>
      <h3>{user.user.phone}</h3>
      </div>
      <div className="userImg">
      <img src={generator.generateRandomAvatar(`${user.user._id}`)}></img>
      </div>
    </StyledUserInfo>
  )
}

export default UserInfo