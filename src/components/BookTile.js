import React from 'react'
import styled from 'styled-components'

const StyledBookTile = styled.div`
  border: 1px solid #f55;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  img{
    
    max-height: 50px;
    float: right;
  }
`;

const StyledH4 = styled.h4`
  color: green;
`


const BookTile = (book) => {
  const singleBook = book.book
  
  return (
    <StyledBookTile key={singleBook._id} >
      <StyledH4>{singleBook.title}</StyledH4>
      <h5>{`${singleBook.authors[0].authorFName} ${singleBook.authors[0].authorLName}`}</h5>
      <img src={singleBook.imageLink} alt={singleBook.title} />
    </StyledBookTile>
  )
}

export default BookTile