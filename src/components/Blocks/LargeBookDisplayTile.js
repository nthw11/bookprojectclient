import React, {useEffect} from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

const LargeBookDisplayTileWrapper = styled.div`
border: 1px solid black;
border-radius: 10px;
padding: 10px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4 auto);
height: auto;
.currentlyReading{
  grid-column: 2 / 4;
  grid-row: 1;
  align: center;
  
}
.infoDiv{
  border: 1px dashed red;
  grid-column: 1 / 3;
  grid-row: 2;
  display: inline-grid;
  grid-template-columns: 1;
  grid-template-rows: auto;
}
.title{
  border: 1px dashed red;
  grid-column: 1;
  grid-row: 1 / 2;
}
.authorDiv{
  border: 1px dashed red;
  grid-column: 1;
  grid-row: 2 / 3;
}
.coverImg{
  border: 1px dashed red;
  grid-column: 4 / 5;
  grid-row: 2;
}
.descriptionDiv{
  border: 1px dashed red;
  grid-column: 3 / 5;
  grid-row: 3;
  /* width: 20vw; */
  height: auto;
}
.bookDetailsSpan{
  color: #222;
}
.bookStats{
  border: 1px dashed red;
  grid-column: 3 / 4;
  grid-row: 2;
}
`



const LargeBookDisplayTile = ({book}) => {
  return (
    <LargeBookDisplayTileWrapper>
      <h1 className='currentlyReading'>Currently Reading</h1>
      <div className="infoDiv">
      <h2 className='title'>Title: {book.title}</h2>
      <div className='authorDiv'><h3>By:</h3>
        {book.authors.map(author => {
        return (
            <h3 key={author}>{author}</h3>
        )
      })}</div>
      </div>
      <div className="coverImg">
        <img src={book.imageLink} alt={book.title} />
        </div>      
      <div className="bookStats">
        <h4>Pages: <span className='bookDetailsSpan'>{book.pageCount}</span></h4>
        <h4>Published Date: <span className="bookDetailsSpand">{book.publishedDate}</span> </h4>
      </div>
      <div className="descriptionDiv">
      <p>{book.description ? book.description.slice(0, 400) : ''}...<span className='seeMore'>See More</span></p>
      </div>

    </LargeBookDisplayTileWrapper>
  )
}

export default LargeBookDisplayTile