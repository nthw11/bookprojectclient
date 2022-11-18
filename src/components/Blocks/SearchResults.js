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
  const searchContext = useContext(SearchContext)
  const searchTerm = searchContext.searchTerm
  const startingPage = searchContext.startingPage

  const pagBackHandler = async () => {

  }

  const pagNextHandler = async () => {
    startingPage += 10
    const response = await axios.get(`${API_SEARCH_URL}${searchTerm}&startIndex=${startingPage}&key=${GOOGLE_BOOKS_KEY}`)

    
  }
  
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
    <div className="paginate">
      <button className="pagBack" onClick={pagBackHandler}>Previous 10 Results</button>
      <button className="pagNext" onClick={pagNextHandler}>Next 10 Results</button>
    </div>
    </StyledSearchResults>
  )
}

export default SearchResults