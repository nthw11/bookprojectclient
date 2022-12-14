import styled from "styled-components";

const StyledClubHome = styled.div`
display: flex;
flex-direction: column;
max-width: 100vw;
min-height: 85vh;
margin: auto;
background: #e6dbdb;
align-content: center;
color: #32292f;

.clubHomeHeader{
  font-family: 'format_1452';
  font-size: 3em;
  margin: 50px;
}

.clubSearch{
  font-family: 'Exo2';
  margin: 50px;
  background: #d5c3c3;
  padding: 20px;
  border-radius: 10px;
  border: none;
  
}

.createNewClub{
  background: #d5c3c3;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-family: 'Exo2';
  margin: 50px;

  .subText{
    font-family: 'Exo2-italic';
    font-size: 0.7em;
    color: red;
  }
}

`

const StyledClubPage = styled.div`
background-color: #d5c3c3;
font-family: "Exo2";
color: #32292f;
.allClubs{
  width: 70vw;
  margin: auto;
}
.clubsList{
  display:flex;
  justify-content: space-around;
}
.currentClub{
  min-height: 100vh;
  margin: 15px;
  h1{
    font-size: 2.5em;
  }
}
.clubMembers{
  margin: 15px;
  font-size: 1.5em;
}

.clubMemberDiv{
  display: flex ;
  border-radius: 10px;
  border: none;
  padding: 7px;
  box-shadow: 1px 2px #32292f;
  max-width: 300px;
  height: 60px;
  justify-content: space-between;
}
.exitIcon{
  cursor: pointer;
}
.joinButton{
  width: 100px;
    height: 50px;
    display: block;
    margin: 5px;
    align-self: center;
    background-color: #de4d86;
    border-radius: 10px;
    border: none;
    color: #fff;
    font-size: .7em;
    font-family: 'Exo2';
    cursor: pointer;
}
  
`

export { StyledClubHome, StyledClubPage }