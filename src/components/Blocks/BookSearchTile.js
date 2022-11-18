import React, {useState} from 'react'
import { Link, history } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../images/bookshelf_logo.png'

const StyledSingleBook = styled.div`
  .link{
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: #32292f;

  }
  background-color: #d5c3c3;
  border-radius: 15px;
  margin: 15px auto;
  max-width: 75vw;
  max-height: 200px;
  
  

  
  img{
    height: 200px;
  
    margin: 0 20 auto 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
    
  .titleAuthor{
    max-width: 150px;
    display: flex;
    flex-direction: column;
  }
   
  .description {
    margin: 10px;
    font-size: .75em;
    max-width: 50vw;
  }

`

const BookSearchTile = (book) => {
  const singleBook = book.book
  console.log(singleBook)
  const singleBookClickHandler = (singleBook) => {
    singleBook.history.push(`book/${singleBook.id}`)
  }
  
  if (singleBook){

    return (
      
      <StyledSingleBook key={singleBook.id}>
        <Link to={`/search/book/${singleBook.id}`} state={{book}} className="link">
      <img src={singleBook.volumeInfo.imageLinks ? singleBook.volumeInfo.imageLinks.thumbnail : logo} alt={singleBook.volumeInfo.title} />
      
      <div className="titleAuthor">

      <h3 className='title'>{singleBook.volumeInfo.title}</h3>
      <h4 className='author'>By: {singleBook.volumeInfo.authors[0] || 'author'}</h4>
      </div>
      <p className='description'>{singleBook.volumeInfo.description ? singleBook.volumeInfo.description.slice(0, 2000) : ''}</p>
      
        </Link>
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

export default BookSearchTile