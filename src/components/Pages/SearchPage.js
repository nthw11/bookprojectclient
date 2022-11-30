import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import Header from '../Blocks/Header'
import SearchResults from '../Blocks/SearchResults'
import { useNavigate } from 'react-router-dom'
import SearchContext from '../../contexts/search-context'
import { StyledSearchBar, StyledSearchPage } from '../styles/searchPageStyles'

const API_SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=`
const GOOGLE_BOOKS_KEY = process.env.REACT_APP_GOOGLE_API_KEY

const SearchPage = (props) => {
  
  const searchContext = useContext(SearchContext)
  const navigate = useNavigate()
  const [searchResults, setSearchResults] = useState([])
  let searchTerm = searchContext.searchTerm
  let startingPage = searchContext.startingPage
  console.log(`searchTerm: ${searchTerm} startingPage: ${startingPage}`)
  useEffect(() => {
      if(searchTerm != ''){
        resumeSearch()
      } 
    }, [])
  const resumeSearch = async() => {
    const response = await axios.get(`${API_SEARCH_URL}${searchTerm}&startIndex=${startingPage}&key=${GOOGLE_BOOKS_KEY}`)
    setSearchResults(response.data.items)

  }
  const handleSubmit = async (e) => {
    searchContext.startingPage = 0
    e.preventDefault()
    const searchQuery = e.target[0].value
    searchContext.searchTerm = searchQuery
    const response = await axios.get(`${API_SEARCH_URL}${searchQuery}&key=${GOOGLE_BOOKS_KEY}`)
    setSearchResults(response.data.items)
  }

  const pagBackHandler = async () => {
    if(searchContext.startingPage > 0) {
      searchContext.startingPage -= 10
      const startingPage = searchContext.startingPage
      const response = await axios.get(`${API_SEARCH_URL}${searchTerm}&startIndex=${startingPage}&key=${GOOGLE_BOOKS_KEY}`)
      setSearchResults(response.data.items)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    } 
  }

  const pagNextHandler = async () => {
    searchContext.startingPage += 10
    const startingPage = searchContext.startingPage
    const response = await axios.get(`${API_SEARCH_URL}${searchTerm}&startIndex=${startingPage}&key=${GOOGLE_BOOKS_KEY}`)
    setSearchResults(response.data.items)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
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
    <div className="paginate">
      <button className="pagBack" onClick={pagBackHandler}>Previous 10 Results</button>
      <button className="pagNext" onClick={pagNextHandler}>Next 10 Results</button>
    </div>
    </StyledSearchPage>
    </>
  )
}

export default SearchPage