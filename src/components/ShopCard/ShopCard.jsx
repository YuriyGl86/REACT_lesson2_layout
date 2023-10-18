import React from 'react'
import classes from './shopCard.module.css'

export function ShopCard({ card }) {
  return (
    <div className={classes['shopCard']}>
        <h2>{card.name}</h2>
        <h3>{card.color}</h3>
        <img src={card.img} alt={card.name} />
        <div className={classes['price-container']}>
            <span>${card.price}</span>
            <button>ADD TO CART</button>
        </div>
    </div>
  )
}
