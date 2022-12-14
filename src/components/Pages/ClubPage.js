import React, {useContext, useState, useEffect} from 'react'
import UserContext from '../../contexts/user-context'
import ClubContext from '../../contexts/club-context'
import ClubCard from '../Blocks/ClubCard'
import BoardTile from '../Blocks/BoardTile'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../Blocks/Header'
import { GiExitDoor } from 'react-icons/gi'
import ClubMemberTile from '../Blocks/ClubMemberTile'
import { StyledClubPage } from '../styles/clubPage-styles'
import { StyledLoading } from '../styles/userHomeStyles'
import bookshelf_logo from '../../images/bookshelf_logo.png'
const API = process.env.REACT_APP_BACKEND_API

const ClubPage = () => {
  const clubContext = useContext(ClubContext)
  const userContext = useContext(UserContext)
  const [ club, setClub ] = useState({})
  const [ boards, setBoards ] = useState([{}])
  const [ clubMembers, setClubMembers ] = useState([])
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const [ isLoading, setLoading ] = useState(true)
  console.log(clubContext.clubMembers)

  const fetchClubInfo = async ()=> {
    const url = `${API}/club/id/${clubContext._id}`
    const config = {
      headers: headers,
      method: 'get',
      url
    }
    await axios(config).then((incomingClubData) => {
      setClub(incomingClubData.data[0])
      console.log(incomingClubData)
      setBoards(incomingClubData.data[0].clubBoards)
      setClubMembers(incomingClubData.data[0].clubMembers)
      setLoading(false)
    })
  }
  let userClubs = []
  userClubs = userContext.clubs
  
  useEffect(()=> {
    fetchClubInfo()
  }, [])

  const joinClubHandler = async () =>{
    const url = `${API}/user/${userContext._id}/club`
    const config = {
      headers: headers,
      method: "put",
      url,
      data: {
        newMember: userContext.username,
        clubId: clubContext._id
      }
    }
    await axios(config).then((incomingClubData) => {
      console.log(incomingClubData)
      if (incomingClubData.status === 200){
        setClubMembers([... userContext.username])
      }
    })
  }

  const leaveClubHandler = async () =>{
    const url = `${API}/user/${userContext._id}/leaveclub`
    const config = {
      headers: headers,
      method: "put",
      url,
      data: {
        clubId: clubContext._id
      }
    }
    await axios(config).then((incomingUserData) => {
      // console.log(incomingUserData)
      if (incomingUserData.status === 200){
        // setClubMembers([... userContext.username])
        console.log(incomingUserData)
      }
    })
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
    <StyledClubPage>
      <Header />
      {/* <div className="allClubs">
        <h2>All My Clubs</h2>
        <div className="clubsList">

        {userClubs && userClubs.map((club) => {
          return (
            <ClubCard key={club._id} club={club} />
            )
          }) }
          </div>
      </div> */}
      <div className="currentClub">

      <h1>{clubContext.clubName}</h1>
      <div className="clubMembers">
        <h2>Members</h2>
        {
          clubMembers && clubMembers.map(member =>{
            return( 
              <div className='clubMemberDiv'>
            <p className='clubMember' >{member}</p>
            <p className='exitIcon'>{
              member === userContext.username ? 
              < GiExitDoor onClick={leaveClubHandler}/>
              :
              <div></div>
              }</p>
            </div>
            )
          })
        }
        {
          clubMembers.includes(userContext.username) ? <h3></h3> : <button className='joinButton' onClick={joinClubHandler}>Join Club</button>
        }
          
      </div>
      <div className="boards">
        <h2>boards</h2>
        {
         clubMembers.includes(userContext.username) ?  
          boards && boards.map(board =>{
          console.log(board)
          return (
            <BoardTile board={board}/>
            )})
            : 
            <div>
              <h4>Please join this club to view the boards</h4>
            </div>
          }
      </div>
            
      </div>
    </StyledClubPage>
  )
}

export default ClubPage