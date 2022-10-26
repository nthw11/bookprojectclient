import React, { useState, useEffect} from 'react'
import Header from '../Blocks/Header'
import axios from 'axios'
import userAlfie from '../../user'
import BookDisplayTile from '../Blocks/BookDisplayTile'
const API = process.env.REACT_APP_BACKEND_API

const Home = () => {

  const [ isLoading, setLoading ] = useState(true)
  const [userBooks, setUserBooks] = useState('')
  let userBooksArray = []

  const fetchUserBooks = () => {
    const url = `${API}/user/book/${userAlfie._id}/books`
    const config = {
      method: 'get',
      url
    }

    axios(config).then((data) => {
      console.log(data)
      setUserBooks(data)
      setLoading(false)
    })
  }
  
  useEffect(()=> {
    fetchUserBooks()
  },[])
  // console.log(userBooks.data.books)
  if(isLoading){
    return(
      <div>
        <Header />
        <h2>...Loading{console.log('loading')} </h2>
      </div>
    )
  } 
  userBooksArray = userBooks.data.books
  return (
    
    <div>
      <Header />
      
      <h1>Home{console.log('rendering data')}</h1>
      <h4>Welcome User</h4>
      <div>
        
        { userBooksArray.length > 0 && userBooksArray.map(book => {
          return (
            <BookDisplayTile key={book._id} book={book} />
            
          )
        })}
      </div>
    </div>
  )
}

export default Home