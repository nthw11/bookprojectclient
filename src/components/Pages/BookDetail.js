import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useLocation, useSearchParams, useParams } from 'react-router-dom'
const GOOGLE_BOOKS_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const API_SEARCH_URL= 'https://www.googleapis.com/books/v1/volumes'

const BookDetail = (book) => {
  // const [ book, setBook ] = useState({})
  // const params = useParams()
  // const bookId = params.bookId
  // useEffect(() => {
  //   async function fetchBook(){
  //     await axios.get(`${API_SEARCH_URL}/${bookId}?key=${GOOGLE_BOOKS_KEY}`)
      
  //   }
  // }, [])
console.log(book)

  
  return (
    <div>
      <Header />
      <h1>book detail page</h1>
      {/* <h2>{book}</h2> */}
    </div>
  )
}

export default BookDetail