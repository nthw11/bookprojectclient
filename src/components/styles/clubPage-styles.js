import styled from "styled-components";

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


  
`

export { StyledClubPage}