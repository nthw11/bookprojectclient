import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import userAlfie from '../../user'

const API = process.env.REACT_APP_BACKEND_API

const BookshelvesBar = (user) => {
  const addNewBookshelfHandler = () => {
    
  }

  
  return (
    <div>
      <h2>Book Shelves Bar</h2>
      <form onSubmit={addNewBookshelfHandler}>
        <label>Add a new bookshelf

        <input type='text' name='addNewBookShelf' required={true} placeholder='add a new bookshelf'/>
        </label>
        <button value='submit' type='submit'>Create</button>
      </form>
    </div>
  )
}

export default BookshelvesBar