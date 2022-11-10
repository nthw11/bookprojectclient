import React from "react";

const UserContext = React.createContext({
  
  _id: '',
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  avatarUrl: '',
  contacts:[],
  blockedContacts: [],
  clubs: [],
  allBooks: [],
  currentlyReading: {},
  finishedReading: [],
  upNext: [],
  bookshelves: [],
  tags: []
  
})

export default UserContext