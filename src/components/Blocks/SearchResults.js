import React from 'react'
import BookSearchTile from './BookSearchTile'
import ErrorBoundary from './ErrorBoundary'
import styled from 'styled-components'
import { useContext } from 'react'
import SearchContext from '../../contexts/search-context'
import axios from 'axios'

const API_SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=`
const GOOGLE_BOOKS_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const StyledSearchResults = styled.div`
  padding: 20px;
  margin: 10px auto;
  background: #e6dbdb;
`

const SearchResults = (books) => {
  const bookSearchArray = books.books
  
  return (
    <StyledSearchResults>
      
      {
        bookSearchArray.map(book => {
          
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