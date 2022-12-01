import styled from "styled-components";

const StyledBoard = styled.div`

margin: 10px auto;
display: flex;
width: 60vw;
.messagesContainer{
  max-height: 40vh;
  width: 40vw;
  overflow-y: scroll;
  overflow-x: hidden;
  order: 2;
}
.msgDiv{

  /* order: 2; */
}
.newMessageForm{
  order: 1;
  label{
    display: block;
    font-size: 2em;
    margin: 20px auto;
    width: 35vw;
  }
  textarea{
    margin: auto;
    min-height: 100px;
    width: 35vw;
    font-size: 1.2em;
    display: block;
    border: none;
    border-radius: 15px;
    padding: 10px;
  }
  button{
    margin: 20px;
    width: 100px;
    height: 75px;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: 1.3em;
    font-family: 'Exo2';
    cursor: pointer;
  }
}
`

export { StyledBoard }