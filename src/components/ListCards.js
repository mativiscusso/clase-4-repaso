import React from 'react'
import data from '../data.json'
import { Card } from './Card'
import { Container } from './Container'


export const ListCards = () => {

  return (
    <Container>
      { data.map(item => (
        <Card key={item.id} 
        avatar={item.avatar}
        name={item.name}
        superpower={item.superpower}
        gender={item.gender}
        />
      ))
      }
    </Container>
 
  )
}
