import React, { useState, useEffect} from 'react'
import Header from '../Blocks/Header'
import axios from 'axios'
import styled from 'styled-components'
import userAlfie from '../../user'
import BookDisplayTile from '../Blocks/BookDisplayTile'
import LargeBookDisplayTile from '../Blocks/LargeBookDisplayTile'
const API = process.env.REACT_APP_BACKEND_API

const UserHomePageWrapper = styled.div`
  border: 1px solid green;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2 auto);
  .upNextWrapper{
    grid-column: 1 / 4;
    grid-row: 1;
  }
  .currentlyReading{
    grid-column: 5 / 9;
    grid-row: 1;
  }
  .unsortedLibrary{
    margin: 15px;
    border: 1px solid black;
    border-radius: 10px;
    grid-column: 1 / 5;
    grid-row: 2;
  }
`

const Home = () => {
  const [ isLoading, setLoading ] = useState(true)
  // const [userBooks, setUserBooks] = useState('')
  const [ userData, setUserData ] = useState('')
  let userBooksArray = []
  let userUpNextArray = []
  const fetchUserInfo = async () => {
    const url = `${API}/user/${userAlfie._id}`
    const config = {
      method: 'get',
      url
    }
    await axios(config).then((incomingUserData) => {
      setUserData(incomingUserData)
      setLoading(false)
      
    })
    console.log(userData)
  }

  useEffect(()=> {
    // fetchUserBooks()
    fetchUserInfo()
  },[])
  
  if(isLoading){
    return(
      <div>
        <Header />
        <h2>...Loading{console.log('loading')} </h2>
      </div>
    )
  } 
  userBooksArray = userData.data.allBooks
  userUpNextArray = userData.data.upNext
  console.log(userUpNextArray)
  return (
    <>
      <Header />
      <h1>Home</h1>
      <h4>Welcome {userData.data.username}</h4>
    <UserHomePageWrapper>
      <div className="upNextWrapper">
      
        <h2>Up Next</h2>
        {userUpNextArray.length > 0 && userUpNextArray.map(book => {
          return(
            // <h2>{book.title}</h2>
            <BookDisplayTile key={book._id} book={book} />
          )
        })}
      </div>
      <div className="currentlyReading">
        {userData.data.currentlyReading &&
      <LargeBookDisplayTile book={userData.data.currentlyReading} />
        }
      </div>
      <div className='unsortedLibrary'>
        <h2>Library</h2>
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