import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SearchResultsModal from './SearchResultsModal'

const API_SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=`
const GOOGLE_BOOKS_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const StyledSearchBar = styled.div`
  max-width: 30vw;
  border-left: 1px solid #999;
  padding: 10px;
`

const SearchBar = (props) => {
  const [openModal, setOpenModal] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault()
    const searchQuery = e.target[0].value
    const response = await axios.get(`${API_SEARCH_URL}${searchQuery}&key=${GOOGLE_BOOKS_KEY}`)
    setSearchResults(response.data.items)
    console.log(searchResults)
    setOpenModal(true)
  }
  return (
    <>
    <StyledSearchBar>
      <h2>SEARCH BAR</h2>
      <form onSubmit={handleSubmit} className="searchbar">
        <label>
          Search for your next book
          <input type="text" name="search" required="true" placeholder="search" />
        </label>
        <button value="submit" type="submit">Search!</button>
      </form>
    </StyledSearchBar>
    <SearchResultsModal open={openModal} books={searchResults} onClose={()=> setOpenModal(false)}  />
    </>
  )
}

export default SearchBar