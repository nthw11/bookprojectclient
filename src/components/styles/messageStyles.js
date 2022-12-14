import styled from "styled-components";

const StyledMessageCard = styled.div`
  max-width: 35vw;
  min-width: 300px;
  background-color: #e6dbdb;
  border: none;
  border-radius: 15px; 
  margin: 20px;
  padding: 10px;
  .singleMessageText{
    font-size: 1.5em;
  }
  .singleMessageAuthor{
    font-family: "Exo2-Italic";
  }
  .singleMessageDate{
    font-size: .7em;
  }
`

const StyledMessageForm = styled.div`
`

export { StyledMessageCard, StyledMessageForm}