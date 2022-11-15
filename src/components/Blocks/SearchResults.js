import React from 'react'
import BookSearchTile from './BookSearchTile'
import ErrorBoundary from './ErrorBoundary'
import styled from 'styled-components'

const StyledSearchResults = styled.div`
  padding: 20px;
  margin: auto;
`

const SearchResults = (books) => {
  const bookSearchArray = books.books
  console.log(bookSearchArray)
  return (
    <StyledSearchResults>
      
      {
        bookSearchArray.map(book => {
          console.log(book)
          return (
          <ErrorBoundary>

          <BookSearchTile book={book} key={book.id} />
          </ErrorBoundary>
          )
        })
      }

    </StyledSearchResults>
  )
}

export default SearchResults