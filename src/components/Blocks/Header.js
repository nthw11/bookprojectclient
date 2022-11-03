import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <nav>
        <ul>
          <Link to={"/"}>
          <li>
            Log Out
            </li>
          </Link>
          <Link to={"/user/new-user"}>
            <li>New User</li>
          </Link>
          <Link to={"/user"}>
          <li>Log In</li>
          </Link>
          <Link to={"/search"}>
          <li>Search</li>
          </Link>
        </ul>
      </nav>
      <hr />
    </div>
  )
}

export default Header