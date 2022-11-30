import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { StyledBookDetail } from '../styles/bookDetailPageStyles'
import Header from '../Blocks/Header'
import TagsInput from '../Blocks/TagsInput'
import UserContext from '../../contexts/user-context'
import SingleBookContext from '../../contexts/singleBook-context'
import { initialSingleBookContext } from '../../contexts/initialSingleBook-context'

const API = process.env.REACT_APP_BACKEND_API

const LibraryBookDetailPage = ({state}) => {
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const userContext = useContext(UserContext)
  let singleBookContext = useContext(SingleBookContext)
  const navigate = useNavigate()
  let data = singleBookContext
  console.log(userContext)
  console.log(data)
  
  const [rating, setRating] = useState(data.userRating)
  const [newCurrentlyReading, setNewCurrentlyReading] = useState()
  const [newFinishedReading, setNewFinishedReading] = useState()
  const [newUpNext, setNewUpNext] = useState()

  const backToLibraryHandler = () => {
    navigate(-1)
  }
  const ratingUpdateHandler = (e) =>{
    e.preventDefault()
    const strRating = e.target[1].value
    setRating(strRating)
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
    console.log(data)
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
        newFinishedReading: data._id,
        moveFromUpNext: 'next'
      }
    }).then(response => {
      if(response.status === 200){
        console.log(response)
        // setNewFinishedReading(response.data.finishedReading)
        // userContext.finishedReading = newFinishedReading
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

  if (data){
    return (
      <div>
      <Header />
      <StyledBookDetail>
      <div className="imgDataDiv">
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
      <div className="infoDiv">
        <h3>Pages: <span className='bookInfoDetails'>{data.pageCount}</span></h3>
        <h3>Publish Date: <span className='bookInfoDetails'>{data.publishedDate.slice(0, -14)}</span></h3>
      </div>
      </div>
      </div>
      <div className="descriptionDiv">
      <p>{data.description}</p>
      </div>
      <div className='ratingDiv'>
        <h4>Rating:</h4>
        <div className="stars">
          <form id='starForm' onSubmit={editBookHandler}>
          <button className='updateRatingBtn' type='submit'>Update Rating</button>
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