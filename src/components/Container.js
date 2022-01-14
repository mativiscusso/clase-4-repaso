import React from 'react'
import './Container.css'

export const Container = (props) => {
  return (
    <main className='container'>
      {props.children}
    </main>
  )
}
