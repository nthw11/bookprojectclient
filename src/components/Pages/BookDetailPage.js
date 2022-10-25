import React, {useEffect} from 'react'
import Header from '../Blocks/Header'
import { useLocation } from 'react-router-dom'

const BookDetailPage = (state) => {

  let location = useLocation()
  // const data = location.state?.book
  // console.log('book data', data)
  console.log(state)
  return (
    <div>
      <Header />
      <h1>Book Detail Page</h1>

    </div>
  )
}

export default BookDetailPage