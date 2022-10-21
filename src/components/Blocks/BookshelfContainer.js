import React from 'react'
import styled from 'styled-components'
import BookshelfHeader from './BookshelfHeader'
import BookTile from './BookTile'

const BookshelfContainerWrapper = styled.div`
  background: #333;
  border: 1px solid #fff;
`

const BookshelfContainer = (books) => {
  const bookArray = books.books
  return (
    <BookshelfContainerWrapper>
      <h2>bookshelf container</h2>
      <BookshelfHeader />
      {bookArray.map(book =>{
        return(
        <BookTile book={book} />
        )
      })}
    </BookshelfContainerWrapper>
  )
}

export default BookshelfContainer