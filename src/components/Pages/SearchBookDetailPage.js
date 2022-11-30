import React, {useState, useContext} from 'react'
import Header from '../Blocks/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import UserContext from '../../contexts/user-context'
import { StyledBookDetail } from '../styles/bookDetailPageStyles'

const API = process.env.REACT_APP_BACKEND_API

const SearchBookDetailPage = (state) => {
  const userContext = useContext(UserContext)
  console.log(userContext)
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const navigate = useNavigate()
  let location = useLocation()
  const data = location.state?.book.book
  const addBookToLibHandler = async (e) => {
    e.preventDefault()
    const response = await axios({
      method: "post",
      headers: headers,
      url: `${API}/user/book/${userContext._id}/add-book`,
      data: {
        title: data.volumeInfo.title,
      subtitle: data.volumeInfo.subtitle,
      authors: data.volumeInfo.authors,
      pageCount: data.volumeInfo.pageCount,
      publishedDate: data.volumeInfo.publishedDate,
      categories: data.volumeInfo.categories,
      description: data.volumeInfo.description,
      imageLink: data.volumeInfo.imageLinks.thumbnail,
      publisher: data.volumeInfo.publisher,
      userRating: 0
      }
    }).then(response => {
      if(response.status === 200){
        return navigate("/user")
      }
    })
    
  }
  const goBackToSearchHandler = () => {
    navigate('/search')
  }

  // console.log(state)
  if (data){

    return (
      <div>
      <Header />
      <StyledBookDetail>
      <div className="imgDiv">
      <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.title} />
      </div>
      <div className="authorTitleDiv">
      <div className="titleDiv">
      <h2>{data.volumeInfo.title}</h2>
      </div>
      <div className="authorDiv">
      <h3>{data.volumeInfo.authors[0]}</h3>
      </div>
      </div>
      <div className="infoDiv">
        <h3>Pages: <span className='bookInfoDetails'>{data.volumeInfo.pageCount}</span></h3>
        <h3>Published: <span className='bookInfoDetails'>{data.volumeInfo.publishedDate}</span></h3>
      </div>
      <div className="descriptionDiv">
      <p>{data.volumeInfo.description}</p>
      </div>

      {/* <h2>{data.volumeInfo.title}</h2>
      <h3>{data.volumeInfo.authors[0]}</h3>
      <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} />
      <p>{data.volumeInfo.description}</p> */}
      <button onClick={addBookToLibHandler} >
        Add Book To My Library
      </button>
      <div className="backToLibrary">
        <button onClick={goBackToSearchHandler}>
          Back to Search Results
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

export default SearchBookDetailPage