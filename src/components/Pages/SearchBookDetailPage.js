import React, {useState} from 'react'
import Header from '../Blocks/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import userAlfie from '../../user'

const API = process.env.REACT_APP_BACKEND_API
const StyledBookDetail = styled.div`
  width: 80vw;
  margin-left: 10vw;
  border: 1px solid black;
  padding: 15px;
`


const SearchBookDetailPage = (state) => {
  const navigate = useNavigate()
  let location = useLocation()
  const data = location.state?.book.book
  // console.log('book data', data)
  const addBookToLibHandler = async (e) => {
    e.preventDefault()
    const response = await axios({
      method: "post",
      url: `${API}/user/book/${userAlfie._id}/add-book`,
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

  // console.log(state)
  if (data){

    return (
      <div>
      <Header />
      <StyledBookDetail>

      <h1>Book Detail Page</h1>
      <h2>{data.volumeInfo.title}</h2>
      <h3>{data.volumeInfo.authors[0]}</h3>
      <img src={data.volumeInfo.imageLinks.thumbnail} alt={data.volumeInfo.title} />
      <p>{data.volumeInfo.description}</p>
      <button onClick={addBookToLibHandler} >
        Add Book To My Library
      </button>
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