import styled from "styled-components";


const StyledLoginForm = styled.div`
  max-width: 40vw;
  margin: 20px auto;
  border: 1px solid black;
  border-radius: 10px;
  border: none;
  padding: 20px;
  background-color: #fadec6 ;
  color: #32292f;
  font-family: 'Exo2';

  h1{
  font-size: 3em;
  font-family: "format_1452";
}

label{
  font-family: 'Exo2';

  margin-left: 2vw;
  
}

input{
  font-family: 'Exo2';
  background-color: #e7f4ff;
  color: #00648d;
  display: block;
  height: 35px;
  margin: 10px auto;
  padding-left: 15px;
  width: 35vw;
  border-radius: 10px;
  border: none;
}  

button{
  font-family: "Exo2";
  margin: 25px auto 0 auto;
  background-color: #bb2200;
  padding: 10px;
  width: 15vw;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  
}
.or{
  font-family: "Exo2";
  font-style: italic;
  margin-left: 5vw;
}
.registerOption{
  background-color: #00648d;
}
.loginOption {
  background-color: #00648d;
  
}
@media (max-width: 700px){
    button{
      width: 30vw;
      margin: auto;
    }
  }
`
const StyledHome = styled.div`
  font-family: "Exo2";
  color: #00648d;
  
  h1{
    font-family: "format_1452";
    font-size: 4em;
  }
  img{
    max-width: 350px;
  }

  .centerDiv{
    width: 50vw;
    margin: 5vh auto;
    text-align: center;
  }
  a{
    text-decoration: none;
    cursor: pointer;
  }
  a:link, a:visited{
    color: #00648d;
  }

  }
`
export {StyledLoginForm, StyledHome}