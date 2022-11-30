import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import ClubContext from '../../contexts/club-context'
import { StyledClubCard } from '../styles/clubCardStyles'

const ClubCard = (club) => {
  const clubContext = useContext(ClubContext)
  const navigate = useNavigate()
  const clubClickHandler = () =>{
    clubContext._id = club.club._id

    clubContext.clubName = club.club.clubName
    clubContext.clubOwner = club.club.clubOwner
    clubContext.clubMembers = club.club.clubMembers
    clubContext.clubBoards = club.club.clubBoards
    clubContext.publicClub = club.club.publicClub
    navigate(`/clubs/${club.club._id}`)
  }

  return (
    <StyledClubCard>
      <h4>{club.club.clubName}</h4>
      <p>{club.club.clubMembers.length} Members</p>
      <button onClick={clubClickHandler}>Visit Club</button>
    </StyledClubCard>
  )
}

export default ClubCard