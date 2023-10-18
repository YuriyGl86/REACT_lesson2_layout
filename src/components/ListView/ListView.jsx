import React from 'react'
import { ShopItem } from '../ShopItem/ShopItem'
import classes from './listView.module.css'

export function ListView({ items }) {
  return (
    <div className={classes['listView-container']}>
      {items.map((item) => (
        <ShopItem item={item}/>
      ))}
    </div>
  )
}
