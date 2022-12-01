import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/user-context'
import SearchContext from '../../contexts/search-context'
import SingleBookContext from '../../contexts/singleBook-context'
import { LargeBookDisplayTileWrapper } from '../styles/booktilestyles'
import dateConverter from '../../util/dateConverter'

const API = process.env.REACT_APP_BACKEND_API

const StyledNoBookDiv = styled.div``

  const LargeBookDisplayTile = ({book: book}) => {
  const userContext = useContext(UserContext)
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }
  const searchContext = useContext(SearchContext)
  const navigate = useNavigate()
  const [newFinishedReading, setNewFinishedReading] = useState()
  const singleBookContext = useContext(SingleBookContext)

  const updateFinishedReading = async () => {
    await axios({
      method: "put",
      url: `${API}/user/${userContext._id}/book-update`,
      headers: headers,
      data: {
        newFinishedReading: book._id,
        newCurrentlyReading: 'next'
      }
    }).then(response => {
      if(response.status === 200){
        setNewFinishedReading(response.data.finishedReading)
        userContext.finishedReading = newFinishedReading
      }
    })
    navigate('/user')
  }  
  const searchClickHandler = () => {
    searchContext.searchTerm = ''
    searchContext.startingPage = 0
    
  }
  const moreInfoHandler = () => {
    singleBookContext._id = book._id
    singleBookContext.title = book.title
    singleBookContext.subtitle = book.subtitle
    singleBookContext.authors = book.authors
    singleBookContext.pageCount = book.pageCount
    singleBookContext.publishedDate = book.publishedDate
    singleBookContext.imageLink = book.imageLink
    singleBookContext.description = book.description
    singleBookContext.userRating = book.userRating
    singleBookContext.tags = book.tags
    singleBookContext.notes = book.notes
    navigate(`/user/book/${book._id}`)
  }

  if(book){
    
    return (
      <LargeBookDisplayTileWrapper>
      <h1 className='currentlyReading'>Currently Reading</h1>
      <div className="infoDiv">
      <h2 title='Book Title' className='title'>{book.title}</h2>
      <div title='Authors' className='authorDiv'>
        {book.authors && book.authors.map(author => {
          return (
            <h3 key={author}>{author}</h3>
            )
          }
          ) } </div>
          <h4>Pages- <span className='bookDetailsSpan'>{book.pageCount}</span></h4>
        <h4>Published Date- <span className="bookDetailsSpan">{dateConverter(book.publishedDate)}</span> </h4>
      </div>
      <div className="coverImg">
        <img src={book.imageLink} alt={book.title} />
        </div>      
      <div className="bookStats">

      </div>
      <div className="descriptionDiv">
      <p>{book.description ? book.description.slice(0, 400) : ''}... 
      </p>
      </div>
      <div className="buttonDiv">
        <button onClick={moreInfoHandler}>More Info</button>
      </div>

    </LargeBookDisplayTileWrapper>
  )
} else {
  return (
    <StyledNoBookDiv>
      <h3>It looks like you aren't currently reading anything</h3>
      <Link to={"/search"} onClick={searchClickHandler}>Find a new book to read!</Link>
    </StyledNoBookDiv>
  )
}


}

export default LargeBookDisplayTile