import { GOOGLE_BOOK_SEARCH } from '../actions/types'


const DEFAULT_STATE = {
  books: [{}]
}

const searchReducer = ( state = DEFAULT_STATE, action) => {
  switch (action.type){
    case GOOGLE_BOOK_SEARCH:
      const search = action.payload
      return [search]
    default: 
      return state
      


  }
}

export default searchReducer