import React, {useState} from 'react'
import Header from '../Blocks/Header'
import { useLocation } from 'react-router-dom'
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


const BookDetailPage = (state) => {

  let location = useLocation()
  const data = location.state?.book.book
  console.log('book data', data)
  const addBookToLibHandler = async (e) => {
    e.preventDefault()
    const newBook = {
      title: data.volumeInfo.title,
      subtitle: data.volumeInfo.subtitle,
      authors: data.volumeInfo.authors,
      pageCount: data.volumeInfo.pageCount,
      publishedDate: data.volumeInfo.PublishedDate,
      categories: data.volumeInfo.categories,
      imageLink: data.volumeInfo.imageLinks.thumbnail,
      publisher: data.volumeInfo.publisher,
    }
    console.log(newBook)
    const response = await axios({
      method: "post",
      url: `${API}/user/book/${userAlfie._id}/add-book`,
      data: {
        title: data.volumeInfo.title,
      subtitle: data.volumeInfo.subtitle,
      authors: data.volumeInfo.authors,
      pageCount: data.volumeInfo.pageCount,
      publishedDate: data.volumeInfo.PublishedDate,
      categories: data.volumeInfo.categories,
      imageLink: data.volumeInfo.imageLinks.thumbnail,
      publisher: data.volumeInfo.publisher,
      }
    }).then(response => {
      if(response.status === 200){
        return (
          <div>
            <h2>Book has been successfully added to your library!</h2>
          </div>
        )
      }
      console.log(response)
      
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

export default BookDetailPage