import styled from "styled-components";

const StyledSingleBook = styled.div`
  background-color: #d5c3c3;
  border-radius: 10px;
  margin: 10px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  img{ 
    height: 150px;
    }
  button{
    height: 150px;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-family: 'oxygen-Bold';
    cursor: pointer;
  }

`

const LargeBookDisplayTileWrapper = styled.div`
border-radius: 10px;
border: none;
background-color: #d5c3c3;
padding: 10px;
margin: 5px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4 auto);
height: auto;
.currentlyReading{
  grid-column: 1 / 4;
  grid-row: 1;
  align: center;
  color: #de4d86;
}
.infoDiv{
  /* border: 1px dashed red; */
  grid-column: 1 / 3;
  grid-row: 2;
  display: inline-grid;
  grid-template-columns: 1;
  grid-template-rows: auto;
}
.title{
  /* border: 1px dashed red; */
  grid-column: 1;
  grid-row: 1 / 2;
}
.authorDiv{
  /* border: 1px dashed red; */
  grid-column: 1;
  grid-row: 2 / 3;
}
.coverImg{
  /* border: 1px dashed red; */
  grid-column: 4 / 5;
  grid-row: 2;
}
.descriptionDiv{
  /* border: 1px dashed red; */
  grid-column: 3 / 5;
  grid-row: 3;
  /* width: 20vw; */
  height: auto;
}
.bookDetailsSpan{
  color: #222;
}
.bookStats{
  /* border: 1px dashed red; */
  grid-column: 3 / 4;
  grid-row: 2;
}
.buttonDiv{
  grid-column: 1 / 2;
  grid-row: 3;
}
button{
    width: 200px;
    height: 75px;
    display: block;
    margin: 5px;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-family: 'oxygen-Regular';
    cursor: pointer;
  }
`
const StyledMiniBookDisplayTile = styled.div`
  background-color: #f7b2b2;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 5px;
  max-width: 20vw;
  color: #00648d;
  cursor: pointer;
  img{
    max-height: 75px;
  }
  h4{
    text-decoration: none;
    
  }
  .link {
  }
`


export {StyledSingleBook, LargeBookDisplayTileWrapper, StyledMiniBookDisplayTile}