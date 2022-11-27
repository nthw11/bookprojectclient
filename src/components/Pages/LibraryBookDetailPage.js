import React, {useState, useContext} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faCircle, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
// import { faCircle as faRegCircle } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

import Header from '../Blocks/Header'
import TagsInput from '../Blocks/TagsInput'
import UserContext from '../../contexts/user-context'
import SingleBookContext from '../../contexts/singleBook-context'
import { initialSingleBookContext } from '../..'
// Edit Book: put/:userId/:bookId :::
// Data to send: userId/bookId (params)
// newUserRating, newCategories, newImageLink, newTags, newNotes (body)

const API = process.env.REACT_APP_BACKEND_API
const StyledBookDetail = styled.div`
  width: 80vw;
  margin-left: 10vw;
  margin-top: 10px;
  background-color:#fbeef1;
  border-radius: 10px;
  border: none;
  padding: 15px;
  display: grid;
  color: #32292f;
  font-family: "oxygen-Regular";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: (25px 25px auto auto);
  h3{
    font-size: .85em;
  }
  .imgDiv {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  
  }
  .authorTitleDiv{
    display: inline-grid;
  }
  .titleDiv {
  
    grid-column: 2 / 3;
    grid-row: 1;
  }
  .authorDiv {
    grid-column: 2 / 3;
    grid-row: 2;
  }
  .descriptionDiv {
    grid-column: 1 / 3;
    grid-row: 3;
  }
  .ratingDiv{
    grid-column: 4 / 5;
    grid-row: 1;
    input{
    margin: 10px 5px;
    }
  }
  .tagsDiv{
    grid-column: 4 / 5;
    grid-row: 2;
  }
  .buttonDiv {
    grid-column: 4 / 5;
    grid-row: 3;
  }
  .bookInfoDetails{
    color: #333;
  }
  .title{
    font-style: italic;
  }
  button{
    width: 200px;
    height: 75px;
    display: block;
    margin: 5px;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-family: 'oxygen-Regular';
    cursor: pointer;
  }
  .currentBookNote{
    color: #efa9c5;
    font-style: italic;
    font-size: .75em;
  }

  .backToLibrary{
    grid-column: 5 / 6;
    grid-row: 1;
    button{
      background-color: #00648d;
      font-size: 1.5em;
    }
  }
  .unread{
    background: #00648d;
  }
  #starSelect{
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background: #00648d;
    color: #fff;
    font-size: 2em;
  }
  .firstOption{
    color: #00648d;
  }
`


const LibraryBookDetailPage = ({state}) => {
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const userContext = useContext(UserContext)
  let singleBookContext = useContext(SingleBookContext)
  console.log(singleBookContext)

  const navigate = useNavigate()
  let location = useLocation()
  
  let data = singleBookContext
  // const data = location.state?.book.book 
  console.log(userContext)
  console.log(data)
  
  const [rating, setRating] = useState(data.userRating)
  const [newCurrentlyReading, setNewCurrentlyReading] = useState()
  const [newFinishedReading, setNewFinishedReading] = useState()
  const [newUpNext, setNewUpNext] = useState()


  const backToLibraryHandler = () => {
    singleBookContext = initialSingleBookContext
    navigate(-1)
  }
  const ratingUpdateHandler = (e) =>{
    e.preventDefault()
    const strRating = e.target[1].value
    setRating(strRating)
    // console.log(rating)

  }

  const removeFromLibHandler = async (e) => {
    e.preventDefault()
    await axios({
      method: "delete",
      headers: headers,
      url: `${API}/user/book/${userContext._id}/${data._id}`
    }).then(response => {
      if(response.status === 200){
        return navigate("/user")
      }
    })
  }
   
  
  const updateCurrentlyReadingState = async () => {
    await axios({
      method: "put",
      headers: headers,
      url: `${API}/user/${userContext._id}/book-update`,
      data: {
        newCurrentlyReading : data._id,
      }
    }).then(response => {
      if(response.status === 200){
        return navigate('/user')
      }
    })
  }  
  
  const updateUpNext = async () => {
    await axios({
      method: "put",
      headers: headers,
      url: `${API}/user/${userContext._id}/book-update`,
      data: {
        newUpNext: data._id,
      }
    }).then(response => {
      if(response.status === 200){
        return navigate('/user')
      }
    })
  }  
  
  const updateFinishedReading = async () => {
    await axios({
      method: "put",
      headers: headers,
      url: `${API}/user/${userContext._id}/book-update`,
      data: {
        newFinishedReading: data._id
      }
    }).then(response => {
      if(response.status === 200){
        return navigate('/user')
      }
    })
  }  
  
  const updateOutOfFinishedReading = async () => {
    await axios({
      method: "put",
      headers: headers,
      url: `${API}/user/${userContext._id}/book-update`,
      data: {
        outOfFinishedReading: data._id
      }
    }).then(response => {
      if(response.status === 200){
        return navigate('/user')
      }
    })
  }  
  
  const editBookHandler = async (e) => {
    console.log(e.target[1].value)
    const newUserRating = (+e.target[1].value)
    e.preventDefault()
    await axios({
      method: "put",
      headers: headers,
      url: `${API}/user/book/${userContext._id}/${data._id}`,
      data: {
      newUserRating,
      // newCategories,
      // newNotes,
      }
    }).then(response => {
      if(response.status === 200){
        return (
          <div>
            <h2>Book has been successfully edited</h2>
          </div>
        )
      }
    })
  }

  // console.log(state)
  if (data){
    // console.log(data)

    return (
      <div>
      <Header />
      <StyledBookDetail>

      <div className="imgDiv">
      <img src={data.imageLink} alt={data.title} />
      </div>
      <div className="authorTitleDiv">
      <div className="titleDiv">
      <h2>{data.title}</h2>
      </div>
      <div className="authorDiv">
      <h3>{data.authors[0]}</h3>
      </div>
      </div>
      <div className="infoDiv">
        <h3>Pages: <span className='bookInfoDetails'>{data.pageCount}</span></h3>
        <h3>Publish Date: <span className='bookInfoDetails'>{data.publishedDate.slice(0, -14)}</span></h3>
      </div>
      <div className="descriptionDiv">
      <p>{data.description}</p>
      </div>
      <div className='ratingDiv'>
        <h4>Rating:</h4>
        <div className="stars">
          <form id='starForm' onSubmit={editBookHandler}>
          <button type='submit'>Submit</button>
        <label htmlFor="stars" >
          <select name="stars" id="starSelect" form='starForm' >
            <option className='firstOption' value="0">{rating}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
          </form>
        </div>
        {/* <FontAwesomeIcon icon={faCircle} /> */}
        {/* <FontAwesomeIcon icon={faCircleHalfStroke} /> */}
      </div>
      <div className="tagsDiv">
        <TagsInput tags={data.tags} user={userContext._id} bookId={data._id}/>
      </div>
        

      <div className="buttonDiv">
      <button onClick={updateUpNext}>
        Add to Up Next
      </button >
      <button onClick={updateCurrentlyReadingState}>
        Set as Currently Reading
      <p className='currentBookNote'>Note: this will replace {`current book`}</p>
      </button >

      {
        data.tags.includes("Read") ? 
        <button className='unread' onClick={updateOutOfFinishedReading}>
        Mark <span className='title'>{data.title}</span> as unread
      </button>
      :
        <button className='read' onClick={updateFinishedReading}>
        Mark <span className='title'>{data.title}</span> as read
      </button>
      
      }
      
    

      <button onClick={removeFromLibHandler} >
        Remove From My Library
      </button>
      </div>
      <div className="backToLibrary">
        <button onClick={backToLibraryHandler}>
          Back to My Library
        </button>
      </div>
      </StyledBookDetail>
    </div>
  )
} else {
  return (
    <div>
      <h2>Sorry, there's been an error...</h2>
    </div>
  )
}
}

export default LibraryBookDetailPage