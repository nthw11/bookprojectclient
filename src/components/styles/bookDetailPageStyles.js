import styled from "styled-components";

const StyledBookDetail = styled.div`
  width: 80vw;
  margin-left: 10vw;
  margin-top: 10px;
  background-color:#fbeef1;
  border-radius: 10px;
  border: none;
  padding: 15px;
  display: grid;
  color: #32292f;
  font-family: "oxygen-Regular";
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: (25px 25px auto auto);
  h3{
    font-size: .85em;
  }
  .imgDiv {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  
  }
  .authorTitleDiv{
    display: inline-grid;
  }
  .titleDiv {
  
    grid-column: 2 / 3;
    grid-row: 1;
  }
  .authorDiv {
    grid-column: 2 / 3;
    grid-row: 2;
  }
  .descriptionDiv {
    grid-column: 1 / 3;
    grid-row: 3;
  }
  .ratingDiv{
    grid-column: 4 / 5;
    grid-row: 1;
    input{
    margin: 10px 5px;
    }
  }
  .tagsDiv{
    grid-column: 4 / 5;
    grid-row: 2;
  }
  .buttonDiv {
    grid-column: 4 / 5;
    grid-row: 3;
  }
  .bookInfoDetails{
    color: #333;
  }
  .title{
    font-style: italic;
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
  .currentBookNote{
    color: #efa9c5;
    font-style: italic;
    font-size: .75em;
  }

  .backToLibrary{
    grid-column: 5 / 6;
    grid-row: 1;
    button{
      background-color: #00648d;
      font-size: 1.5em;
    }
  }
  .unread{
    background: #00648d;
  }
  #starSelect{
    margin: 5px;
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background: #00648d;
    color: #fff;
    font-size: 2em;
  }
  .firstOption{
    color: #00648d;
  }
  .updateRatingBtn{
    /* font-size: 1.5em; */
    width: 100px;
  }
`


export {StyledBookDetail}