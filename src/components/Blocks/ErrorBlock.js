import React, { useState } from 'react'
import { StyledErrorMsg } from '../styles/errorStyle'

const ErrorBlock = (errorObj) => {
  const [ errorViz, setErrorViz ] = useState(false)
  const error = errorObj.error
  
  setTimeout( () => {
    setErrorViz(true)
  }, 5000)

  if (error !== "" && !errorViz){
  return (
    <StyledErrorMsg>
      <h2>{error}</h2>
    </StyledErrorMsg>
  )
  }
}

export default ErrorBlock