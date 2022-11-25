import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledMiniBookDisplayTile = styled.div`
  background-color: #d5c3c3;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 5px;
  width: 15vw;
  
  img{
    max-height: 75px;
  }
  h4{
    text-decoration: none;
    
  }
  .link {
  }
`

const MiniBookDisplayTile = (book) => {
  const singleBook = book.book
  console.log(singleBook)
  if(singleBook){
    return(
      <Link to={`/user/book/${singleBook._id}`} state={{book}} className='link'>
      <StyledMiniBookDisplayTile>
        <h4>{singleBook.title}</h4>
        <img src={singleBook.imageLink} alt={singleBook.title} />
      </StyledMiniBookDisplayTile>
      </Link>
    )
  } else {
  return (
    <div>
      <h1>...</h1>
    </div>
  )
  }
}

export default MiniBookDisplayTile