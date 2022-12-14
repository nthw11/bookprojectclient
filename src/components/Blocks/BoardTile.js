import React, {useContext, useState} from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import UserContext from '../../contexts/user-context'
import { StyledMessageCard, StyledMessageForm } from '../styles/messageStyles'
import { StyledBoard } from '../styles/boardStyles'
import dateConverter from '../../util/dateConverter'

const token = localStorage.getItem("token")
const headers = { 'token' : token }
const API = process.env.REACT_APP_BACKEND_API

const BoardTile = (board) => {
  console.log(board)
  const { register, handleSubmit, reset, watch, formState: {errors} } = useForm()
  const userContext = useContext(UserContext)
  const [ messages, setMessages ] = useState([...board.board.boardMessages])
    
  const onSubmit = async (data) => {
    const {messageText} = data
    const url = `${API}/board/${board.board._id}`
    const config = {
      method: 'post',
      headers: headers,
      data: {
        userId: userContext._id,
        stringAuthor: userContext.username,
        text: messageText,
      },
      url
    }
    await axios(config).then((message) => {
      messages.push(message.data)
    })
    reset()
  }
  const revMessages = messages.slice().reverse()

  console.log(userContext)
  return (
    <StyledBoard>
      <div className="boardMessages">
      <h3>{board.board.boardName}</h3>
      <div className="messages">
        <div className="messagesContainer">
        {revMessages && revMessages.map(message =>{
        const time = dateConverter(message.createdAt)
        console.log(message.createdAt)
        console.log(time)
        
        return(
        <StyledMessageCard className="msgDiv" key={message._id}>
          <p className="singleMessageText">{message.messageText}</p>
          <p className="singleMessageAuthor">by: {message.stringAuthor}</p>
          <p className="singleMessageDate">{time}</p>
        </StyledMessageCard>
        )
      })}
      </div>
      <StyledMessageForm className="newMessageForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>New message</label>
          <textarea rows={4} wrap={true} placeholder='message...' {...register("messageText")} />
          <button value='submit' type='submit'>Submit</button>
        </form>
      </StyledMessageForm>
      </div>
      </div>
    </StyledBoard>
  )
}

export default BoardTile