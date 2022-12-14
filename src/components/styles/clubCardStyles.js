import styled from "styled-components";

const StyledClubCard = styled.div`
  background-color: #d5c3c3;
  border-radius: 10px;
  margin: 10px;
  height: 50px;
  width: 25vw;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  button{
    height: 40px;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-family: 'Exo2';
    cursor: pointer;
  }
  p{
    font-size: .75em;
  }
`

export {StyledClubCard}