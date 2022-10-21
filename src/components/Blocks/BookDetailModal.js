import React from 'react'
import styled from 'styled-components'

const StyledBookDetailModal = styled.div`
z-index: 2000;
display: grid;
grid-template-columns: repeat(2, 1fr);

.left-side{
  grid-column: 1/2;
  padding: 20px;

  border: 1px solid red;
 
}
.right-side{
  grid-column: 2/3;
  padding: 20px;
  
  border: 1px solid red;
}
`
const StyledCloseBtn = styled.btn`
`

const BookDetailModal = ({open, onClose, book}) => {
  if(!open) return null
  console.log(book)
  return (
    <StyledBookDetailModal>
      <div className='left-side'>
      <h2>{book.volumeInfo.title}</h2>
      <h3>{book.volumeInfo.authors[0]}</h3>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      </div>
      <div className="right-side">
        <p>{book.volumeInfo.description}</p>
      </div>
    
    </StyledBookDetailModal>
  )
}

export default BookDetailModal