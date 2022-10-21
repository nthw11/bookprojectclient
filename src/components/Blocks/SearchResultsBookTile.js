import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components'
import BookDetailModal from './BookDetailModal';

const StyledSearchResultsBookTile = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-around;
.textInfo{
  padding-left: 10px;
  display: inline-block;
}
.imgInfo{
  padding-right: 10px;
  
}
  .bookThumbnail{
    max-height: 100px;
    
  }
`
const AddBtn = styled.button`
background: #f11;
height: 40px;
width: 75px;

`

const SearchResultsBookTile = ({book}) => {
  const [openModal, setOpenModal] = useState(false)
  const bookClickHandler = (book) => {
    setOpenModal(true)
  }
  
  if(!book){
    return(
      <div>
        <h2>No results to display</h2>
      </div>
    )
  }
  return (
    <>
    <StyledSearchResultsBookTile key={book.id}>
      <div className="textInfo">
        <h2>{book.volumeInfo.title}</h2>
        <h4>{book.volumeInfo.authors}</h4>
      </div>
      <div className="imgInfo">
        <img className='bookThumbnail' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        <AddBtn onClick={bookClickHandler}>
        {/* <Link to={{ pathname:`/book/${book.id}`, state: ({title: book.volumeInfo.title}, {pageCount: book.volumeInfo.pageCount})  }}  > */}
          More Details
        {/* </Link> */}
        </AddBtn>
      </div>
    </StyledSearchResultsBookTile>
        <BookDetailModal open={openModal} book={book} onClose={() => setOpenModal(false)} />
        </>
  )
}

export default SearchResultsBookTile