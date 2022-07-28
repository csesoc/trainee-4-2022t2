// Skye
import React from 'react'

const Button = ({purpose, sign, time, setTime }) => {

  return (
    <div className='buttonCD'>
      <button onClick={() => purpose} >{sign}</button>
    </div>
  )
}

export default Button