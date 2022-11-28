import React, {useState, useContext} from 'react'
import { Link, history, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import SingleBookContext from '../../contexts/singleBook-context'
import { StyledSingleBook } from '../styles/booktilestyles'

const BookDisplayTile = (book) => {
  const navigate = useNavigate()
  
  const singleBook = book.book
  
  const singleBookContext = useContext(SingleBookContext)
  const moreInfoHandler = () => {
    singleBookContext._id = singleBook._id
    singleBookContext.title = singleBook.title
    singleBookContext.subtitle = singleBook.subtitle
    singleBookContext.authors = singleBook.authors
    singleBookContext.pageCount = singleBook.pageCount
    singleBookContext.publishedDate = singleBook.publishedDate
    singleBookContext.imageLink = singleBook.imageLink
    singleBookContext.description = singleBook.description
    singleBookContext.userRating = singleBook.userRating
    singleBookContext.tags = singleBook.tags
    singleBookContext.notes = singleBook.notes
    navigate(`/user/book/${singleBook._id}`)
  }
  if (singleBook){

    return (
      
      <StyledSingleBook key={singleBook._id}>
      <img src={singleBook.imageLink || 'https://as1.ftcdn.net/v2/jpg/01/95/35/78/1000_F_195357805_his1UjQcJqJiJohgiYnK5cwdVu8G5Ldd.jpg'} alt={singleBook.title} />
      <h3>{singleBook.title}</h3>
      <h4>{singleBook.authors[0] || 'author'}</h4>
        {/* <Link to={`/user/book/${singleBook._id}`} state={{book}} > */}
      <button onClick={moreInfoHandler}>
          See More
      </button>
          {/* </Link> */}
    </StyledSingleBook>
  )
} else {
  return (
    <div>

    <h2>no books to display</h2>
    <h3>try again?</h3>
    </div>
  )
}
}

export default BookDisplayTile