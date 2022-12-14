import React, {useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import Header from '../Blocks/Header'
import UserContext from '../../contexts/user-context'
import ClubContext from '../../contexts/club-context'
import SearchContext from '../../contexts/search-context'
import ClubCard from '../Blocks/ClubCard'
import { StyledClubHome } from '../styles/clubPage-styles'
import { StyledLoginForm } from '../styles/LoginStyles'
import { StyledSearchBar } from '../styles/searchPageStyles'

const API = process.env.REACT_APP_BACKEND_API

const ClubsHome = () => {
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([])
  const userContext = useContext(UserContext)
  const clubContext = useContext(ClubContext)
  const searchContext = useContext(SearchContext)
  let searchTerm = searchContext.searchTerm
  let startingPage = searchContext.startingPage
  // console.log(userContext._id)
  useEffect(() => {
    if(searchTerm != ''){
      // resumeSearch()
    } 
  }, [])
  const resumeSearch = async() => {
    const response = await axios.get(`${API}/club/name/${searchTerm}`)
    setSearchResults(response.data.items)

  }
  const onSearchClubSubmit = async (e) => {
    searchContext.startingPage = 0
    e.preventDefault()
    const searchQuery = e.target[0].value

    const config = {
      method: 'get',
      headers: headers,
      url: `${API}/club/name/${searchQuery}`
    }
    await axios(config).then((allClubsData) => {
      setAllClubs(allClubsData.data)
      console.log(allClubsData.data)

    })

  

    
  }

  // const pagBackHandler = async () => {
  //   if(searchContext.startingPage > 0) {
  //     searchContext.startingPage -= 10
  //     const startingPage = searchContext.startingPage
  //     const response = await axios.get(`${API_SEARCH_URL}${searchTerm}&startIndex=${startingPage}&key=${GOOGLE_BOOKS_KEY}`)
  //     setSearchResults(response.data.items)
  //     window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  //   } 
  // }

  // const pagNextHandler = async () => {
  //   searchContext.startingPage += 10
  //   const startingPage = searchContext.startingPage
  //   const response = await axios.get(`${API_SEARCH_URL}${searchTerm}&startIndex=${startingPage}&key=${GOOGLE_BOOKS_KEY}`)
  //   setSearchResults(response.data.items)
  //   window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  // }

  const [ userClubs, setUserClubs ] = useState([...userContext.clubs])
  const [ allClubs, setAllClubs ] = useState([])
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const { register, handleSubmit, watch, formState: {errors} } = useForm()

  const onNewClubSubmit = async (data) => {
    const { clubName, publicClub } = data
    const config = {
      method: 'post',
      headers: headers,
      data: {
        clubName,
        publicClub,
        newMember: userContext.username
      },
      url: `${API}/club/${userContext._id}`
    }
    await axios(config).then((newClubData) => {
      console.log(newClubData)
      clubContext._id = newClubData.data._id
      clubContext.clubName = newClubData.data.clubName
      clubContext.clubOwner = newClubData.data.clubOwner
      clubContext.publicClub = newClubData.data.publicClub
      clubContext.clubMembers = newClubData.data.clubMembers
    })
      return navigate(`/clubs/${clubContext._id}`)
  }





  return (
    <div>
      <Header />
      < StyledClubHome >
      <h1 className='clubHomeHeader'>Clubs Home</h1>
      <StyledSearchBar>
      <div className='clubSearch'><h1>Find a new club</h1>
      <form onSubmit={onSearchClubSubmit} className="searchbar">
        <label>
          <input type="text" name="search" placeholder="search for a new club by name" required="true" />
        </label>
          <button className="searchButton" value="submit" type="submit">Search!</button>
      </form>
      </div> 
      <div className="clubSearchResults">
        {
          allClubs && allClubs.map(club => {
            return(

              <ClubCard club={club} />
              )
          })
          
        }

      </div>
      </StyledSearchBar>
      <div className="createNewClub">
        <h1>Create a new club</h1>
        <StyledLoginForm>
        {/* <div className="clubCreateBar"> */}
        <form onSubmit={handleSubmit(onNewClubSubmit)}>
          <label>Club Name</label>
          <input type="text" placeholder='Club name'{...register("clubName")} />
          <p>Private or public?</p>
          <p className="subText">Please note that at the moment all clubs are public</p>
          <label htmlFor="false">Only people I have invited can join</label>
          <input id='false' type="radio" value={false} {...register("publicClub")}/>
          <label htmlFor="true">Anyone can join</label>
          <input id='true' type="radio" value={true} {...register("publicClub")}/>
          <button value="submit" type='submit'>Create new club!</button>
        </form>
        </StyledLoginForm>
        </div> 
        </StyledClubHome>
    </div>
  )
}

export default ClubsHome