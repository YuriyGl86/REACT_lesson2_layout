import React from 'react'
import classes from './shopItem.module.css'

export  function ShopItem({ item }) {
  return (
    <div className={classes.item}>
        <img src={item.img} alt={item.name}/>
        <h2>{item.name}</h2>
        <h3>{item.color}</h3>
        <div>${item.price}</div>
        <button className={classes.button}>ADD TO CART</button>
    </div>
  )
}
