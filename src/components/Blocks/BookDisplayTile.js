import React, {useState} from 'react'
import { Link, history } from 'react-router-dom'
import styled from 'styled-components'

const StyledSingleBook = styled.div`
  background-color: #d5c3c3;
  border-radius: 10px;
  margin: 10px;
  
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  img{ 
    height: 150px;
    }
  button{
    height: 150px;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-family: 'oxygen-Bold';
    cursor: pointer;
  }

`

const BookDisplayTile = (book) => {
  
  const singleBook = book.book
  if (singleBook){

    return (
      
      <StyledSingleBook key={singleBook._id}>
      <img src={singleBook.imageLink || 'https://as1.ftcdn.net/v2/jpg/01/95/35/78/1000_F_195357805_his1UjQcJqJiJohgiYnK5cwdVu8G5Ldd.jpg'} alt={singleBook.title} />
      <h3>{singleBook.title}</h3>
      <h4>{singleBook.authors[0] || 'author'}</h4>
        <Link to={`/user/book/${singleBook._id}`} state={{book}} >
      <button >
          See More
      </button>
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

export default BookDisplayTile