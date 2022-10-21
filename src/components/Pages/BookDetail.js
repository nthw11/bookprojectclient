import axios from 'axios'
import React, { useEffect } from 'react'
import Header from './Header'
import { useLocation } from 'react-router-dom'
const GOOGLE_BOOKS_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const API_SEARCH_URL= 'https://www.googleapis.com/books/v1/volumes/'
const BookDetail = (state) => {


  // const book = useEffect( async () => {
  //   await axios.get(`${API_SEARCH_URL}${location.key}&key=${GOOGLE_BOOKS_KEY}`)
  // }, [])
  console.log(state)
  return (
    <div>
      <Header />
      <h1>book detail page</h1>
    </div>
  )
}

export default BookDetail