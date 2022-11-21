import React, { useState, useEffect, useContext} from 'react'
import Header from '../Blocks/Header'
import axios from 'axios'
import styled from 'styled-components'
import BookDisplayTile from '../Blocks/BookDisplayTile'
import LargeBookDisplayTile from '../Blocks/LargeBookDisplayTile'
import BookshelvesBar from '../Blocks/BookshelvesBar'
import UserContext from '../../contexts/user-context'
import UserInfo from '../Blocks/UserInfo'
import bookshelf_logo from '../../images/bookshelf_logo.png'
const API = process.env.REACT_APP_BACKEND_API

const StyledLoading = styled.div`

.fullPage{
    background-color: #e6dbdb;
    height: 100vh;
    z-index: 1;
  }
  h3{
    font-family: "format_1452";
    font-size: 3em;
    color: #00648d;
    text-align: center;
  }
  .spinner{
    position: absolute;
    top: 40vh;
    left: calc(50vw - 150px);
    margin: auto;
    img{
      max-height: 250px;
    }
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    animation: rotation 3s infinite linear;
  }
`

const UserHomePageWrapper = styled.div`
  background-color: #e6dbdb;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3 auto);
  font-family: 'format_1452';
  color: #32292f;

  .categoryHeader{
    background-color: #d5c3c3;
    height: 40px;
    padding: 5px;
    border-radius: 10px;
  }
  .upNextWrapper{
    grid-column: 2 / 6;
    grid-row: 1;
  }
  .currentlyReading{
    grid-column: 7 / 12;
    grid-row: 1;
  }
  .bookShelvesSection{
    grid-column: 1 / 12;
    grid-row: 2;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    }
  .unsortedLibrary{
    margin: 15px;
    border-radius: 10px;
    grid-column: 1 / 5;
    grid-row: 3;
  }
`

const Home = () => {
  const userContext = useContext(UserContext)
  console.log(userContext)
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const [ isLoading, setLoading ] = useState(true)

  const [ userData, setUserData ] = useState('')
  let userBooksArray = []
  let userUpNextArray = []
  const fetchUserInfo = async () => {
    const url = `${API}/user/${userContext._id}`
    const config = {
      headers: headers,
      method: 'get',
      url
    }
    await axios(config).then((incomingUserData) => {
      setUserData(incomingUserData)
      setLoading(false)
    })
    
  }

  useEffect(()=> {
    // fetchUserBooks()
    fetchUserInfo()
  },[])
  
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
  userBooksArray = userData.data.allBooks
  userUpNextArray = userData.data.upNext
  
  return (
    <>
      <Header />
      <UserInfo user={userContext}/>

    <UserHomePageWrapper>
      <div className="upNextWrapper">
      
        <h2 className='categoryHeader'>Up Next</h2>
        {userUpNextArray.length > 0 && userUpNextArray.map(book => {
          return(
            <BookDisplayTile key={book._id} book={book} />
          )
        })}
      </div>
      <div className="currentlyReading">
        {userData.data.currentlyReading &&
      <LargeBookDisplayTile book={userData.data.currentlyReading} />
        }
      </div>
      {/* <div className="bookShelvesSection">
        <BookshelvesBar user={userData.data}/>
      
      </div> */}
      <div className='unsortedLibrary'>
        <h2 className='categoryHeader'>Library</h2>
        { userBooksArray && userBooksArray.map(book => {
          return (
            <BookDisplayTile key={book._id} book={book} />
          )
        })}
      </div>
    </UserHomePageWrapper>
    </>
  )
}

export default Home