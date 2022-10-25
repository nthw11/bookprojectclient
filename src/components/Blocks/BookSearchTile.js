import React, {useState} from 'react'
import { Link, history } from 'react-router-dom'
import styled from 'styled-components'

const StyledSingleBook = styled.div`
  border: 1px solid black;
`

const BookSearchTile = (book) => {
  const singleBook = book.book
  console.log('singleBook', singleBook)
  // const [singleBook, setBooko] = useState(singleBook)
  // const singleBookClickHandler = (singleBook) => {
  //   singleBook.history.push(`book/${singleBook.id}`)
  // }
  if (singleBook){

    return (
      
      <StyledSingleBook key={singleBook.id}>
      <h3>{singleBook.volumeInfo.title}</h3>
      <h4>{singleBook.volumeInfo.authors[0] || 'author'}</h4>
      <img src={singleBook.volumeInfo.imageLinks.thumbnail || 'https://as1.ftcdn.net/v2/jpg/01/95/35/78/1000_F_195357805_his1UjQcJqJiJohgiYnK5cwdVu8G5Ldd.jpg'} alt={singleBook.volumeInfo.title} />
      <button >
        <Link to={{pathname: `book`, state:{book:singleBook}}} >
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