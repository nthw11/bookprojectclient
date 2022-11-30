import styled from "styled-components";

const StyledSingleBook = styled.div`
  background-color: #d5c3c3;
  border-radius: 10px;
  margin: 10px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  h3, h4{
    padding: 10px;
  }
  img{ 
    height: 150px;
    }
  button{
    height: 75px;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-family: 'Exo2';
    cursor: pointer;
  }
  h2{
    padding: 0 10px;
  }
  @media (max-width: 1200px){
    font-size: .75em;
    
    img {
      max-height: 125px;
    }

  }
  @media (max-width: 1000px){
    max-height: 100px;
    font-size: .5em;
    padding: 5px;
    h3, h4{
      padding: 3px;
    }
    img{
      max-height: 75px;
    }
    button{
      max-height: 50px;
      font-size: 1em;
    }
  }
  @media (max-width: 700px){
    font-size: .75em;
  }

`

const LargeBookDisplayTileWrapper = styled.div`
border-radius: 10px;
border: none;
background-color: #d5c3c3;
padding: 0 20px 10px 20px;
margin: 5px;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(4 auto);
height: auto;
gap: 1px 1px;
.currentlyReading{
  grid-column: 1 / 5;
  grid-row: 1;
  color: #de4d86;
  font-size: 2em;
  margin: 15px auto 25px auto;
  

}
.infoDiv{
  grid-column: 1 / 3;
  grid-row: 2;
  display: inline-grid;
  grid-template-columns: 1;
  grid-template-rows: auto;
}
.title{
  grid-column: 1;
  grid-row: 1 / 2;
}
.authorDiv{
  grid-column: 1;
  grid-row: 2 / 3;
}
.coverImg{
  grid-column: 4 / 5;
  grid-row: 2;
}
.descriptionDiv{
  grid-column: 2 / 5;
  grid-row: 3;
  height: auto;
}
.bookDetailsSpan{
  color: #222;
}
.bookStats{
  grid-column: 3 / 4;
  grid-row: 2;
}
.buttonDiv{
  grid-column: 1 / 2;
  grid-row: 3;
}
button{
    width: 125px;
    height: 75px;
    display: block;
    margin: 5px 20px 5px 0;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-family: 'Exo2';
    font-size: 1.4em;
    cursor: pointer;
  }
  @media (max-width: 1200px){
    .infoDiv {
      font-size: .75em;
    }
    img {
      max-height: 150px;
    }
    .descriptionDiv{
      font-size: .75em;
    } 
    button{
      font-size: .75em;
      width: 100px;
      height: 50px;
    }
  }
  @media (max-width: 1000px){
    max-height: 500px;
    overflow: clip;
    img {
      max-height: 100px;
    }
    .descriptionDiv{
      font-size: .75em;
    } 
    button{
      font-size: .5em;
      width: 75px;
      height: 25px;
    }

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