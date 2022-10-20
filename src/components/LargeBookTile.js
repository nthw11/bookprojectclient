import React from 'react'
import styled from 'styled-components'

const StyledLargeBookTile = styled.div`
  border: 1px solid black;
  background-color: #f00;
  width: 60vw;
  color: #f55;
  padding: 15px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 150px;
    
  }
`;

const LargeBookTile = (book) => {
  
  return (
    <StyledLargeBookTile >
      <img src={book.book.imageLink}></img>
      <h2>{book.book.title}</h2>
      <h4>{book.book.subtitle}</h4>
      <p>{`${book.book.authors[0].authorFName} ${book.book.authors[0].authorMName} ${book.book.authors[0].authorLName}`}</p>
      <ul>
        <h4>Tags:</h4>
      {book.book.tags.map(tag => {
        return(
        <li>{tag}</li>)
      })}
      </ul>
      
    </StyledLargeBookTile>
  )
}

export default LargeBookTile