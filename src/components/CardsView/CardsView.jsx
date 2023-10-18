import React from 'react'
import classes from './cardView.module.css'
import { ShopCard } from '../ShopCard'


export function CardsView({ cards }) {
  return (
    <div className={classes['cardsView-container']}>
      {cards.map((card) => (
        <ShopCard card={card}/>
      ))}
    </div>
  )
}
