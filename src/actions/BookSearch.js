import axios from 'axios'
export const GOOGLE_BOOK_SEARCH = "GOOGLE_BOOK_SEARCH"

const API_SEARCH_URL = `https://www.googleapis.com/books/v1/volumes?q=`
const GOOGLE_BOOKS_KEY = process.env.REACT_APP_GOOGLE_API_KEY


const bookSearch = async (params) => {
  await axios.get(`${API_SEARCH_URL}${params}&key=${GOOGLE_BOOKS_KEY}`).then(function (response){
    dispatchEvent({
      type: GOOGLE_BOOK_SEARCH,
      payload: response.data
    })
    return response
  })
  .catch((err) => {
    console.log(err)
  })
}

export default bookSearch