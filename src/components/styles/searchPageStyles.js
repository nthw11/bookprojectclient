import styled from "styled-components";

const StyledSearchPage = styled.div`
  background-color: #d5c3c3;
  min-height: 100vh;
  padding-bottom: 20px;

  button{
    margin: 5px 30px;
    display: inline-block;
    width: 150px;
    height: 75px;
    font-size: 1.5em;
    border-radius: 10px;
    border: none;
    color: white;
    font-family: "Exo2";
    
  }
  .paginate{
    display: flex;
    justify-content: center;
  }
  .pagBack{

    background: #00648d;
  }
  .pagNext{
    background: #de4d86;
  }

  `

const StyledSearchBar = styled.div`
  margin: auto;
  max-width: 30vw;
  padding: 10px;
  color: #32292f;
  align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    /* position: relative; */
    font-family: "format_1452";
    font-size: 3em;
  }
  
  input{
    
    height: 40px;
    width: 300px;
    border-radius: 10px;
    font-size: 1.5em;
  }
  
  .searchButton {
    margin: 3px;
    display: block;
    width: 150px;
    height: 40px; 
    font-family: "Exo2";
    font-size: 1.5em;
    border-radius: 10px;
    color: #fbeef1;
    background-color: #de4d86;
    border-color: #32292f;
  }
  @media(max-width: 700px){
    
    h2{
      font-size: 2em;
    }
  }
`
const StyledSingleBookSearch = styled.div`
  .link{
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: #32292f;

  }
  background-color: #d5c3c3;
  border-radius: 15px;
  margin: 15px auto;
  max-width: 75vw;
  max-height: 200px;
  overflow: clip ;
  font-family: "Exo2";

  
  img{
    height: 200px;
    margin: 0;
    margin-right: 20px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
    
  .titleAuthor{
    max-width: 150px;
    display: flex;
    flex-direction: column;
  }
   
  .description {
    margin: 10px;
    font-size: .75em;
    max-width: 50vw;
    padding: 10px;
  }
@media(max-width: 1000px){
  max-width: 85vw;
  .titleAuthor{
    font-size: .85em;
  }
}
@media(max-width: 700px){
  max-width: 85vw;
  height: 150px;
  img{
    height: 150px;
  }
  .titleAuthor{
    padding: 20px;
  }
  .description{
    display: none;
  }
}
`


export { StyledSearchBar, StyledSearchPage, StyledSingleBookSearch }