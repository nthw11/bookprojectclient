import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const API = process.env.REACT_APP_BACKEND_API

const StyledTagsInputWrapper = styled.div`
  
  padding: .5em;
  border-radius: 5px;
  width: min(20vw, 400px);
  margin-top: 1em;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;
  gap: .5em;
  .tagItem{
    background-color: #ccc;
    padding: .5em .75em;
    border-radius: 5px;
    
    display: inline-block;
  }

  .tagItem .close{
    /* position: absolute; */
    
    height: 20px;
    width: 20px;
    /* display: inline-block ; */
    background-color: #333 ;
    color: #fff;
    border-radius: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: .5em;
    font-size: 16px;
    cursor: pointer;
  }
  .input{
    flex-grow: 1;
    padding: .5em .5em;
    border-radius: 10px;
    height: 30px;
    border: none;
    outline: none;
  }
`

const TagsInput = ({tags, user, bookId}) => {
  const [newTags, setNewTags] = useState([...tags])
  const [ tagUser ] = useState(user)
  const [ tagBookId ] = useState(bookId)
  const token = localStorage.getItem("token")
  const headers = { 'token' : token }

  const updateTags = async () => {
    await axios({
      method: "put",
      headers: headers,
      url: `${API}/user/book/${tagUser}/${tagBookId}`,
      data:{
        newTags: newTags
      }
    }).then(response => {
      if(response.status === 200){
        console.log('updated tags', newTags)

      }
    })
  }

  const handleTagInput = (e) => {
    if(e.key !== 'Enter') return
    const value = e.target.value
    if(!value.trim()) return
    setNewTags([...newTags, value])
    updateTags()
    e.target.value = ''
  }

  const handleRemoveTag = (index) => {
    setNewTags(newTags.filter((element, idx) => idx !== index))
    console.log(`newTags: ${newTags}`)
    updateTags()
  }

  return (
    <>
    <h4>Tags</h4>
    <StyledTagsInputWrapper>
      
      {newTags.map((tag, index)=> (
        <div className="tagItem" key={index}>
        <span className='text'>{tag}</span>
        <span className='close' onClick={() => handleRemoveTag(index)}>x</span>
      </div>
      ))}
      <input className='input' type="text" placeholder='add new tag' onKeyDown={handleTagInput} />
    </StyledTagsInputWrapper>
    </>
  )
}

export default TagsInput