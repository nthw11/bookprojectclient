import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/bookshelf_logo.png'
import { StyledSingleBookSearch } from '../styles/searchPageStyles'

const BookSearchTile = (book) => {
  const singleBook = book.book
  console.log(singleBook)
  
  if (singleBook){

    return (
      
      <StyledSingleBookSearch key={singleBook.id}>
        <Link to={`/search/book/${singleBook.id}`} state={{book}} className="link">
      <img src={singleBook.volumeInfo.imageLinks ? singleBook.volumeInfo.imageLinks.thumbnail : logo} alt={singleBook.volumeInfo.title} />
      
      <div className="titleAuthor">

      <h3 className='title'>{singleBook.volumeInfo.title}</h3>
      <h4 className='author'>By: {singleBook.volumeInfo.authors[0] || 'author'}</h4>
      </div>
      <p className='description'>{singleBook.volumeInfo.description ? singleBook.volumeInfo.description.slice(0, 1200) : ''}...</p>
      
        </Link>
    </StyledSingleBookSearch>
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

export default BookSearchTile