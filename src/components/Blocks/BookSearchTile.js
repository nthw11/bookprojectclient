import React, {useState} from 'react'
import { Link, history } from 'react-router-dom'
import styled from 'styled-components'

const StyledSingleBook = styled.div`
  border: 1px solid black;
  /* padding: 10px; */
  border-radius: 15px;
  margin: 5px auto;
  max-width: 75vw;
  max-height: 30vh;
  display: flex;
  color: #32292f;
  h3{
    order: 2;
    margin: 15px;
  }
  h4{
    order: 3;
    margin: 15px;
  }
  img{
    order: 1;
    margin: 0 10 auto 0;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;

  }
  p{
    order: 4;
    font-size: .75em;
  }
  button{
    font-family: "format_1452";
    margin-left: 15px;
    order: 5;
    border: 1px solid #32292f;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #d6f3ff;
  }
  a{
    color: #00648d;
    text-decoration: none;
    font-weight: bold;
    }
`

const BookSearchTile = (book) => {
  const singleBook = book.book
  
  console.log('singleBook', singleBook)
  // const [singleBook, setBooko] = useState(singleBook)
  const singleBookClickHandler = (singleBook) => {
    singleBook.history.push(`book/${singleBook.id}`)
  }
  
  if (singleBook){

    return (
      
      <StyledSingleBook key={singleBook.id}>
      <h3>{singleBook.volumeInfo.title}</h3>
      <h4>By: {singleBook.volumeInfo.authors[0] || 'author'}</h4>
      <img src={singleBook.volumeInfo.imageLinks.thumbnail || 'https://as1.ftcdn.net/v2/jpg/01/95/35/78/1000_F_195357805_his1UjQcJqJiJohgiYnK5cwdVu8G5Ldd.jpg'} alt={singleBook.volumeInfo.title} />
      <p>{singleBook.volumeInfo.description}</p>
      <button >
        <Link to={`/search/book/${singleBook.id}`} state={{book}} >
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

export default BookSearchTile