import React from 'react'
import './Button.css'

export const Button = (props) => {

  return (
    <button className={props.outlined ? 'btn-primary btn-outlined' : 'btn-primary'} style={{textTransform: 'uppercase'}}>
      {props.text}
    </button>
  )
}
