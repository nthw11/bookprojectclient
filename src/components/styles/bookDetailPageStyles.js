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
  font-family: "Solway-Regular";
  line-height: 1.5em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: (25px 25px auto auto);
  /* gap: 15px; */
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
  .infoDiv{
    grid-column: 2 / 3;
    grid-row: 3;
  }
  .descriptionDiv {
    grid-column: 1 / 4;
    grid-row: 3;
    padding: 15px;
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
  @media(max-width: 1200px){
    font-size: .8em;
    img{ 
      max-width: 125px;}
    button{
      width: 150px;
      height: 50px;
      font-size: .9em;
    }
  }
  @media(max-width: 1000px){
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-rows: (20px 20px auto auto auto); */
    font-size: .65em;
    .buttonDiv {
    grid-column: 1 / 6;
    grid-row: 3;
    display: inline-flex;
    justify-content: center;
  }
    .descriptionDiv{
      /* width: auto; */
      grid-column: 1 / 6;
      margin-right: 15px;
      grid-row: 5;
    }
    img{
      max-width: 75px;
     }
    button{
      width: 100px;
      font-size: .7em;
    }
  }
  @media(max-width: 700px){
    display: flex;
    flex-direction: column;
    .imgDataDiv{
      order: 0;
      display: inline-flex;
      justify-content: space-around;
    }
    .backToLibrary{
      order: 1;
      margin: 5px auto;
    }
    .ratingDiv{
      order: 2;
      display: inline-flex;
      justify-content: space-around;
    }
    .tagsDiv{
      order: 3;
      display: inline-flex;
      justify-content: space-around;
      margin: 5px auto;
    }

    .buttonDiv{
      order: 3;
      flex-wrap: wrap;
      margin: 15px;
    }
    .descriptionDiv{
      order: 4;
      font-size: 1.1em;
      line-height: 1.4em;
    }

  }
`


export {StyledBookDetail}