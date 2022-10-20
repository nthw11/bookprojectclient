import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import SearchResultsBookTile from './SearchResultsBookTile'

const StyledModal = styled.div`
    .overlay{
      background-color: rgba(0,0,0,0.5);
      position: fixed;
      display: flex;
      justify-content: space-between;
      top: 0;
      left: 0;
      width: 100%;
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
      background-color: #fff;
      position: absolute;
      width: 80vw;
      height: auto ;
      top: 30vh;
      left: 10vw;
    }
`

const SearchResultsModal = ({open, onClose, books}) => {
  if(!open) return null
  console.log(books)
  return (
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
              <SearchResultsBookTile book={book} />
              )
              
            })

            }

          </div>
        </div>
      
      </div>
    </StyledModal>
  )
}

export default SearchResultsModal

