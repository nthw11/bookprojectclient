import React, { useState, useContext } from 'react'
import Header from '../Pages/Header'
import styled from 'styled-components'
import SearchResultsBookTile from './SearchResultsBookTile'
import BookDetailModal from './BookDetailModal'
import SearchContext from '../../contexts/searchContext'

const StyledModal = styled.div`
    .overlay{
      background-color: rgba(0,0,0,0.5);
      position: fixed;
      display: flex;
      justify-content: space-between;
      top: 0;
      left: 0;
      width: 90%;
      height: 100%;
      color: #FFF;  
      z-Index: 1000;
      overflow-Y: "auto";
    }
    .closeBtn{
      cursor: pointer;
      position: fixed;
      top: 10px;
      right: 10px;
    }
    .modalContainer{
      background-color: #fdd;
      position: absolute;
      width: 70vw;
      height: auto ;
      top: 5vh;
      left: 15vw;
    }
`


const SearchResultsModal = ({open, onClose, books}) => {

  if(!open) return null
  console.log(books)
  
  return (
    // <SearchContext.Consumer>
    <StyledModal className='overlay' onClick={onClose}>
      <div onClick={(e)=> {
        e.stopPropagation()
      }} className='modalContainer'>
      <h2>Search Results</h2>
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose} >X</p>
          <div className="content">
            {books.map(book => {
              return (
              <SearchResultsBookTile book={book} onClick={onClose} />
              )
              
            })

            }

          </div>
        </div>
      
      </div>
    </StyledModal>

    // </SearchContext.Consumer>
  )
}

export default SearchResultsModal

