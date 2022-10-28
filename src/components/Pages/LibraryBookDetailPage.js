import React, {useState, useEffect} from 'react'
import { useLocation, redirect, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faCircle, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
// import { faCircle as faRegCircle } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import userAlfie from '../../user'
import Header from '../Blocks/Header'
import TagsInput from '../Blocks/TagsInput'

// Edit Book: put/:userId/:bookId :::
// Data to send: userId/bookId (params)
// newUserRating, newCategories, newImageLink, newTags, newNotes (body)

const API = process.env.REACT_APP_BACKEND_API
const StyledBookDetail = styled.div`
  width: 80vw;
  margin-left: 10vw;
  border: 1px solid black;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: (25px 25px auto);
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
    font-size: .95em;
    color: #333;
  }
  .title{
    font-style: italic;
  }
`


const LibraryBookDetailPage = (state) => {
  const navigate = useNavigate()
  let location = useLocation()
  const data = location.state?.book.book
  console.log(data)
  const [rating, setRating] = useState(data.userRating)
  const [newCurrentlyReading, setNewCurrentlyReading] = useState()
  const [newFinishedReading, setNewFinishedReading] = useState()
  const [newUpNext, setNewUpNext] = useState()


  const removeFromLibHandler = async (e) => {
    e.preventDefault()
    await axios({
      method: "delete",
      url: `${API}/user/book/${userAlfie._id}/${data._id}`
    }).then(response => {
      if(response.status === 200){
        return navigate("/user")
      }
    })
  }
   
  
  const updateCurrentlyReadingState = async () => {
    await axios({
      method: "put",
      url: `${API}/user/${userAlfie._id}/book-update`,
      data: {
        newCurrentlyReading : data._id,
      }
    }).then(response => {
      console.log(response)
      if(response.status === 200){
        return navigate('/user')
      }
    })
  }  
  
  const updateUpNext = async () => {
    await axios({
      method: "put",
      url: `${API}/user/${userAlfie._id}/book-update`,
      data: {
        newUpNext: data._id,
      }
    }).then(response => {
      console.log(response)
      if(response.status === 200){
        return navigate('/user')
      }
    })
  }  
  
  const updateFinishedReading = async () => {
    await axios({
      method: "put",
      url: `${API}/user/${userAlfie._id}/book-update`,
      data: {
        newFinishedReading: data._id
      }
    }).then(response => {
      console.log(response)
      if(response.status === 200){
        return navigate('/user')
      }
    })
  }  
  
  const editBookHandler = async (e) => {
    e.preventDefault()
    const response = await axios({
      method: "put",
      url: `${API}/user/book/${userAlfie._id}/${data._id}`,
      // data: {
      // newUserRating,
      // newCategories,
      // newImageLink,
      // newTags,
      // newNotes,
      // }
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
        <h3>Publish Date: <span className='bookInfoDetails'>{data.publishedDate}</span></h3>
      </div>
      <div className="descriptionDiv">
      <p>{data.description}</p>
      </div>
      <div className='ratingDiv'>
        <h4>Rating:</h4>
        <div className="stars">
        <label>
          <input type="radio" name='rating' value={1}/>
          </label>
        <label>
          <input type="radio" name='rating' value={2}/>
          </label>
        <label>
          <input type="radio" name='rating' value={3}/>
          </label>
        <label>
          <input type="radio" name='rating' value={4}/>
          </label>
        <label>
          <input type="radio" name='rating' value={5}/>
          </label>
        </div>
        {/* <FontAwesomeIcon icon={faCircle} /> */}
        {/* <FontAwesomeIcon icon={faCircleHalfStroke} /> */}
      </div>
      <div className="tagsDiv">
        <TagsInput tags={data.tags} user={userAlfie._id} bookId={data._id}/>
      </div>
        

      <div className="buttonDiv">
      <button onClick={updateUpNext}>
        Add to Up Next
      </button >
      <button onClick={updateCurrentlyReadingState}>
        Set as Currently Reading
      </button >
      <p>Note: this will replace {`current book`}</p>
      <button onClick={updateFinishedReading}>
        Mark <span className='title'>{data.title}</span> as read
      </button>
      <button onClick={removeFromLibHandler} >
        Remove From My Library
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