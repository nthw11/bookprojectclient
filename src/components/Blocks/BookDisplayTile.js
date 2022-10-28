import React, {useState} from 'react'
import { Link, history } from 'react-router-dom'
import styled from 'styled-components'

const StyledSingleBook = styled.div`
  border-top: 1px solid black;
  
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  img{ 
    height: 150px;
    }
  button{
    height: 75px;
    align-self: center;
  }
`

const BookDisplayTile = (book) => {
  const singleBook = book.book
  console.log('singleBook', singleBook)
  // const [singleBook, setBooko] = useState(singleBook)
  const singleBookClickHandler = (singleBook) => {
    singleBook.history.push(`book/${singleBook.id}`)
  }
  if (singleBook){

    return (
      
      <StyledSingleBook key={singleBook._id}>
      <h3>{singleBook.title}</h3>
      <h4>{singleBook.authors[0] || 'author'}</h4>
      <img src={singleBook.imageLink || 'https://as1.ftcdn.net/v2/jpg/01/95/35/78/1000_F_195357805_his1UjQcJqJiJohgiYnK5cwdVu8G5Ldd.jpg'} alt={singleBook.title} />
      <button >
        <Link to={`/user/book/${singleBook._id}`} state={{book}} >
          See More
          </Link>
      </button>
    </StyledSingleBook>
  )
} else {
  return (
    <div>

    <h2>no books to display</h2>
    <h3>try again?</h3>
    </div>
  )
}
}

export default BookDisplayTile