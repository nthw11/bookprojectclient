import React from 'react'
import styled from 'styled-components'

const StyledSearchResultsBookTile = styled.div`
border: 1px solid black;
/* display: flex; */
/* justify-content: space-evenly; */
.textInfo{
  padding-left: 10px;
  display: inline-block;
}
.imgInfo{
  padding-right: 10px;
  display: inline-block;
  float: right;
}
  .bookThumbnail{
    max-height: 100px;
    
  }
`

const SearchResultsBookTile = ({book}) => {
  return (
    <StyledSearchResultsBookTile>
      <div className="textInfo">
      <h2>{book.volumeInfo.title}</h2>
      <h4>{book.volumeInfo.authors}</h4>
      </div>
      <div className="imgInfo">
        <img className='bookThumbnail' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      </div>
    </StyledSearchResultsBookTile>
  )
}

export default SearchResultsBookTile