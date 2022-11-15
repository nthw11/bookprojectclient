import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../Blocks/Header'
import SearchResults from '../Blocks/SearchResults'


const API_SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=`
const GOOGLE_BOOKS_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const StyledSearchPage = styled.div`
  background-color: #f8d3b4;
  min-height: 100vh;
  `

const StyledSearchBar = styled.div`
  margin: 3px auto;
  max-width: 30vw;
  padding: 10px;
  color: #32292f;
  align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    position: relative;
    font-family: "format_1452";
    font-size: 3em;
  }
  
  input{
    
    height: 40px;
    width: 300px;
    border-radius: 10px;
    font-size: 1.5em;
  }
  
  .searchButton {
    margin: 3px;
    display: block;
    width: 150px;
    height: 40px; 
    font-family: "format_1452";
    font-size: 1.5em;
    border-radius: 10px;
    color: #fbeef1;
    background-color: #de4d86;
    border-color: #32292f;
  }
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
    <StyledSearchPage>
    <StyledSearchBar>
      <h2>Search for a book</h2>
      <form onSubmit={handleSubmit} className="searchbar">
        <label>
          
          <input type="text" name="search" required={true} placeholder="search" />
        </label>
        <button className='searchButton' value="submit" type="submit">Search!</button>
      </form>
    </StyledSearchBar>
    <SearchResults books={searchResults} />
    </StyledSearchPage>
    </>
  )
}

export default SearchPage