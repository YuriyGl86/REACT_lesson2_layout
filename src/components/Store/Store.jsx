
import React from 'react'
import { IconSwitch } from '../IconSwitch/IconSwitch'
import { CardsView } from '../CardsView/CardsView'
import { ListView } from '../ListView/ListView'
import { useState } from 'react'
import { products } from './db'
import classes from './store.module.css'
 
export function Store() {
    const handleViewSwitch = (event) => {
        console.log(event)
        setView(!cardsView)
    }

    const initialState = true
      const [cardsView, setView] = useState(initialState)


  return (
    <div className={classes.container}>
        <IconSwitch icon={ cardsView? 'view_module': 'view_list' } onSwitch={ handleViewSwitch }/>
        { cardsView? <ListView items = { products }/> : <CardsView cards = { products }/> }
    </div>
    
  )
}
