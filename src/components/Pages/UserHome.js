import React, { useState, useEffect} from 'react'
import Header from '../Blocks/Header'
import axios from 'axios'
import userAlfie from '../../user'
import BookSearchTile from '../Blocks/BookSearchTile'
const API = process.env.REACT_APP_BACKEND_API

const Home = () => {

    
  const [userBooks, setUserBooks] = useState('')

  const fetchUserBooks = async () => {
    const url = `${API}/user/book/${userAlfie._id}/books`
    const config = {
      method: 'get',
      url
    }

    await axios(config).then((data) => {
      console.log(data)
      setUserBooks(data)
    })
  }
  
  useEffect(()=> {
    fetchUserBooks()
  },[])
  // console.log(userBooks.data.books)
  if(userBooks !== ''){
    const userBooksArray = userBooks.data.books
  } else {
    const userBooksArray = []
  }
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <h4>Welcome User</h4>
      <div>
        
        { userBooksArray.length > 0 && userBooksArray.map(book => {
          return (
            <BookSearchTile key={book._id} book={book} />
            // <h2 key={book._id}>{book.title}</h2>
          )
        })}
      </div>
    </div>
  )
}

export default Home