import React from 'react'
import BookSearchTile from './BookSearchTile'
import ErrorBoundary from './ErrorBoundary'

const SearchResults = (books) => {
  const bookSearchArray = books.books
  console.log(bookSearchArray)
  return (
    <div>
      <h3>Search Results</h3>
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

    </div>
  )
}

export default SearchResults