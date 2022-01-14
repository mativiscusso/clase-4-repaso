import React from 'react'
import './Card.css'

export const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.avatar} alt="avatar" />
      <strong>{props.name}</strong>
      <p>{props.superpower}</p>
      <small>{props.gender}</small>
    </div>
  )
}
