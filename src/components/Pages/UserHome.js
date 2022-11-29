import React, { useState, useEffect, useContext, useRef} from 'react'
import Header from '../Blocks/Header'
import axios from 'axios'
import styled from 'styled-components'
import BookDisplayTile from '../Blocks/BookDisplayTile'
import LargeBookDisplayTile from '../Blocks/LargeBookDisplayTile'
import BookshelvesBar from '../Blocks/BookshelvesBar'
import UserContext from '../../contexts/user-context'
import UserInfo from '../Blocks/UserInfo'
import bookshelf_logo from '../../images/bookshelf_logo.png'
import MiniBookDisplayTile from '../Blocks/MiniBookDisplayTile'
import { StyledLoading, UserHomePageWrapper } from '../styles/userHomeStyles'
const API = process.env.REACT_APP_BACKEND_API


const Home = () => {
  
  const userContext = useContext(UserContext)
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const [ isLoading, setLoading ] = useState(true)
  const [ stateUpNext, setStateUpNext ] = useState([])
  const [ userData, setUserData ] = useState('')
  let userBooksArray = []
  // let userUpNextArray = []
  
  const fetchUserInfo = async () => {
    const url = `${API}/user/${userContext._id}`
    const config = {
      headers: headers,
      method: 'get',
      url
    }
    await axios(config).then((incomingUserData) => {
      setUserData(incomingUserData)
      setStateUpNext(incomingUserData.data.upNext)
      setLoading(false)
    })
  }
  //Update Up Next List
  const updateUpNext = async (upNext) => {
    await axios({
      method: "put",
      headers: headers,
      url: `${API}/user/${userContext._id}/upnext-update`,
      data: {
        reorderedUpNext : upNext
      }
    }).then(response => {
      if(response.status === 200){
        console.log(response)
      }
    })
  }
  //Drag & Drop
  const dragItem = useRef()
  const dragOverItem = useRef()

  const dragStart = (e, position) => {
    dragItem.current = position;
    // console.log(e.target.innerHTML)
  }
  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML)
  }
  const dragDrop = (e) => {
    const reorderedUpNextArray = [...stateUpNext]
    const dragItemContent = reorderedUpNextArray[dragItem.current]
    reorderedUpNextArray.splice(dragItem.current, 1)
    reorderedUpNextArray.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setStateUpNext(reorderedUpNextArray)
    updateUpNext(reorderedUpNextArray)
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
  // userUpNextArray = userData.data.upNext
  // console.log(stateUpNext)
  // userFinishedArray = userData.data.finishedReading
  // console.log(userData.data)
    
  return (
    <>
      <Header />
      <UserInfo user={userContext}/>

    <UserHomePageWrapper>
      <div className="upNextWrapper">
      
        <h2 className='categoryHeader'>Up Next</h2>
        {stateUpNext.length > 0 && stateUpNext.map((book, index) => {
          return(
            <div 
            key={book._id} 
            draggable
            onDragStart={(e) => dragStart(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={dragDrop}
            >
            <BookDisplayTile index={index} book={book} />
            </div>
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
        { userBooksArray && userBooksArray.map((book) => {
          if(!book.tags.includes("Read")){

            return (
              <BookDisplayTile key={book._id} book={book} />
              )
            }  
        })}
      </div>
      <div className="finishedReading">
        <h2 className="categoryHeader">Finished Reading</h2>
        { userBooksArray.map(book => {
          if(book.tags.includes("Read")){

            return (
              <MiniBookDisplayTile key={book._id} book={book} />
              )
            }
        })}
      </div>
    </UserHomePageWrapper>
    </>
  )
}

export default Home