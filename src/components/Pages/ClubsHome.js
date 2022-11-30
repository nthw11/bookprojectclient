import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import Header from '../Blocks/Header'
import UserContext from '../../contexts/user-context'
import ClubContext from '../../contexts/club-context'
const API = process.env.REACT_APP_BACKEND_API

const ClubsHome = () => {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)
  const clubContext = useContext(ClubContext)
  console.log(userContext._id)
  const [ userClubs, setUserClubs ] = useState([...userContext.clubs])
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onSubmit = async (data) => {
    const { clubName, publicClub } = data
    const config = {
      method: 'post',
      headers: headers,
      data: {
        clubName,
        publicClub
      },
      url: `${API}/club/${userContext._id}`
    }
    await axios(config).then((newClubData) => {
      clubContext._id = newClubData.data._id
      clubContext.clubName = newClubData.data.clubName
      clubContext.clubOwner = newClubData.data.clubOwner
      clubContext.publicClub = newClubData.data.publicClub
    })
      return navigate(`/clubs/${clubContext._id}`)
  }

  return (
    <div>
      <Header />
      <h1>Clubs Home</h1>
      <div className='clubSearch'><h1>Find a new club</h1></div> 
      <div className="createNewClub">
        <h1>Create a new club</h1>
        <div className="clubCreateBar">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Club Name</label>
          <input type="text" placeholder='Club name'{...register("clubName")} />
          <p>Private or public?</p>
          <label htmlFor="false">Only people I have invited can join</label>
          <input id='false' type="radio" value={false} {...register("publicClub")}/>
          <label htmlFor="true">Anyone can join</label>
          <input id='true' type="radio" value={true} {...register("publicClub")}/>
          <button value="submit" type='submit'>Create new club!</button>
        </form>
        </div>
        </div> 
    </div>
  )
}

export default ClubsHome