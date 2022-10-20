import React from 'react'
import styled from 'styled-components'

const StyledBookTile = styled.div`

`;

const StyledH4 = styled.h4`
  color: green;
`


const BookTile = (book) => {
  return (
    <StyledBookTile>
      <StyledH4>{book.title}</StyledH4>

    </StyledBookTile>
  )
}

export default BookTile