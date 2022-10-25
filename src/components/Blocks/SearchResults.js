import React from 'react'
import BookSearchTile from './BookSearchTile'

const SearchResults = (books) => {
  const bookSearchArray = books.books
  console.log(bookSearchArray)
  return (
    <div>
      <h3>Search Results</h3>
      {
        bookSearchArray.map(book => {
          return (
          <BookSearchTile book={book} />
          )
        })
      }

    </div>
  )
}

export default SearchResults