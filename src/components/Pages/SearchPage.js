import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../Blocks/Header'
import SearchResults from '../Blocks/SearchResults'


const API_SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=`
const GOOGLE_BOOKS_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const StyledSearchBar = styled.div`
  max-width: 30vw;
  border-left: 1px solid #999;
  padding: 10px;
`

const SearchPage = (props) => {

  const [searchResults, setSearchResults] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const searchQuery = e.target[0].value
    const response = await axios.get(`${API_SEARCH_URL}${searchQuery}&key=${GOOGLE_BOOKS_KEY}`)
    setSearchResults(response.data.items)
    

  }
  return (
    <>
    <Header />
    <StyledSearchBar>
      <h2>SEARCH BAR</h2>
      <form onSubmit={handleSubmit} className="searchbar">
        <label>
          Search for your next book
          <input type="text" name="search" required={true} placeholder="search" />
        </label>
        <button value="submit" type="submit">Search!</button>
      </form>
    </StyledSearchBar>
    <SearchResults books={searchResults} />
    </>
  )
}

export default SearchPage