import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { StyledMiniBookDisplayTile } from '../styles/booktilestyles'
import SingleBookContext from '../../contexts/singleBook-context'

const MiniBookDisplayTile = (book) => {
  const singleBook = book.book
  // console.log(singleBook)
  const navigate = useNavigate()
  const singleBookContext = useContext(SingleBookContext)
  const moreInfoHandler = () => {
    singleBookContext._id = singleBook._id
    singleBookContext.title = singleBook.title
    singleBookContext.subtitle = singleBook.subtitle
    singleBookContext.authors = singleBook.authors
    singleBookContext.pageCount = singleBook.pageCount
    singleBookContext.publishedDate = singleBook.publishedDate
    singleBookContext.imageLink = singleBook.imageLink
    singleBookContext.description = singleBook.description
    singleBookContext.userRating = singleBook.userRating
    singleBookContext.tags = singleBook.tags
    singleBookContext.notes = singleBook.notes
    navigate(`/user/book/${singleBook._id}`)
  }
  if(singleBook){
    return(
      
      <StyledMiniBookDisplayTile key={singleBook._id} onClick={moreInfoHandler}>
        <h4>{singleBook.title}</h4>
        <img src={singleBook.imageLink} alt={singleBook.title} />
      </StyledMiniBookDisplayTile>
     
    )
  } else {
  return (
    <div>
      <h1>...</h1>
    </div>
  )
  }
}

export default MiniBookDisplayTile