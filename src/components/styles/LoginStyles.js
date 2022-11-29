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

  h1{
  font-size: 3em;
  font-family: "format_1452";
}

label{
  font-family: "format_1452";
  margin-left: 2vw;
  
}

input{
  background-color: #e7f4ff;
  color: #00648d;
  font-family: 'oxygen-Light';
  display: block;
  height: 35px;
  margin: 10px auto;
  padding-left: 15px;
  width: 35vw;
  border-radius: 10px;
  border: none;
}  

button{
  font-family: "oxygen-Regular";
  margin: 25px 25px 0 25px;
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
  font-family: "oxygen-Bold";
  font-style: italic;
  margin-left: 150px;
}
.registerOption{
  background-color: #00648d;
}
`
export {StyledLoginForm}