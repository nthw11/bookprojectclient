import React, {useContext} from 'react'
import UserContext from '../../contexts/user-context'
import Header from '../Blocks/Header'
import { initialUserContext } from '../..'

const Home = () => {
  let userContext = useContext(UserContext)
  userContext = {}


  console.log(userContext)
  return (
    <div>
      <Header />
      <h1>Home</h1>
      <h4>Welcome! Please Log in</h4>
    </div>
  )
}

export default Home