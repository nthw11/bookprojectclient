import styled from "styled-components";

const StyledLoading = styled.div`

.fullPage{
    background-color: #e6dbdb;
    height: 100vh;
    z-index: 1;
    font-family: "Exo2";
  }
  h3{
    font-size: 3em;
    color: #00648d;
    text-align: center;
  }
  .spinner{
    position: absolute;
    top: 40vh;
    left: calc(50vw - 150px);
    margin: auto;
    img{
      max-height: 250px;
    }
    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }
    animation: rotation 3s infinite linear;
  }
`

const UserHomePageWrapper = styled.div`
  background-color: #e6dbdb;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3 auto);
  font-family: 'Exo2';
  color: #32292f;

  .categoryHeader{
    background-color: #d5c3c3;
    max-height: 40px;
    padding: 15px;
    border-radius: 10px;
  }
  .upNextWrapper{
    margin: 15px;
    grid-column: 2 / 6;
    grid-row: 1;
  }
  .currentlyReading{
    grid-column: 7 / 12;
    grid-row: 1;
  }
  .bookShelvesSection{
    grid-column: 1 / 12;
    grid-row: 2;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    }
  .unsortedLibrary{
    margin: 15px;
    border-radius: 10px;
    grid-column: 1 / 5;
    grid-row: 3;
  }
  .finishedReading{
    margin: 15px;
    grid-column: 6 / 11;
    grid-row: 3;
  }
  @media (max-width: 700px){
    display: flex;
    flex-direction: column;
    .currentlyReading{
      order: 1;
    }
    .upNextWrapper{
      order:2;
    }
    .unsortedLibrary{
      order: 3;
    }
    .finishedReading{
      order: 4;
    }
  }
`
const StyledUserInfo = styled.div`
max-width: 80vw;
display: grid;
grid-template-columns: 4(1fr 1fr 2fr 1fr);
grid-template-rows: 2;
background-color: #ebf9ff;
border-radius: 10px;
border: none;
height: auto;
padding: 15px 10vw;
margin: 15px;
color: #32292f;
font-family: 'Exo2';

.userName{
  grid-column: 1 / 3;
  grid-row: 1;
}
.userImg{
  grid-column: 3 / 4;
  grid-row: 1;
}
img{
  grid-row: 1;
  max-width: 150px;
}
.settings{
  grid-row: 1;
  grid-column: 4 / 5;
  color: blue;
  font-size: 2em;
  cursor: pointer;

}

`

export {UserHomePageWrapper, StyledLoading, StyledUserInfo}