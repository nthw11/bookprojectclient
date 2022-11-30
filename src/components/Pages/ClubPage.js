import React, {useContext, useState, useEffect} from 'react'
import UserContext from '../../contexts/user-context'
import ClubContext from '../../contexts/club-context'
import ClubCard from '../Blocks/ClubCard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../Blocks/Header'
import { StyledLoading } from '../styles/userHomeStyles'
import bookshelf_logo from '../../images/bookshelf_logo.png'
const API = process.env.REACT_APP_BACKEND_API

const ClubPage = () => {
  const clubContext = useContext(ClubContext)
  const userContext = useContext(UserContext)
  const [ club, setClub ] = useState({})
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const [ isLoading, setLoading ] = useState(true)
  // console.log(userContext)
  const fetchClubInfo = async ()=> {
    const url = `${API}/club/id/${clubContext._id}`
    const config = {
      headers: headers,
      method: 'get',
      url
    }
    await axios(config).then((incomingClubData) => {
      setClub(incomingClubData)
      console.log(club)
      setLoading(false)
    })
  }
  let userClubs = []
  userClubs = userContext.clubs
  console.log(userClubs)

  useEffect(()=> {
    fetchClubInfo()
  }, [])

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
      <div className="allClubs">
        <h2>All My Clubs</h2>
        {userClubs && userClubs.map((club) => {
          console.log(club)
          return (
            <ClubCard key={club._id} club={club} />
          )
        }) }
      </div>
      <div className="currentClub">

      <h1>{clubContext.clubName}</h1>
      <div className="boards">
        <h2>boards</h2>
        
      </div>
      </div>
    </div>
  )
}

export default ClubPage