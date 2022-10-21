import React, {useState} from 'react'
import styled from 'styled-components'
import Header from './Header'
import LargeBookTile from '../Blocks/LargeBookTile'


import dummyBookData from '../../dummyData.js'
import BookshelfContainer from '../Blocks/BookshelfContainer'

const UserMainPageWrapper = styled.div`
  display: flex;
`

const UserMainPage = (props) => {
  const [books, setBooks] = useState(dummyBookData)
  
  
  return (
    <div>
      <Header />
      <h1>User Main Page</h1>
      <UserMainPageWrapper>
      <LargeBookTile book={books[0]}/>
      <BookshelfContainer books={books}/>
    </UserMainPageWrapper>
    </div>
  )
}

export default UserMainPage