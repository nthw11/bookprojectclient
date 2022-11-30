import styled from "styled-components";

const StyledHeader = styled.div`

font-family: "format_1452";
max-width: 100vw;
display: flex;
justify-content: space-between;
margin: auto;
/* background-color: #f0bcc5; */
background-color: #d6f3ff;
z-index: 10;

h1{
  color: #00648d;
  font-size: 2.5em;
}

img{
  margin: 25px;
  height: 75px;
}
nav{
  font-family: "Exo2";
}

ul{
  margin-right: 35px;
}

li{
  list-style: none;
  color: #32292f;
  text-decoration: none;
  padding-top: 20px;
}
a{
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  text-align: right;
}
@media(max-width: 700px){
  img{
    height: 50px;
  }
  h1{
    font-size: 1.5em;
  }
}
`
export {StyledHeader}