import React from 'react'
// import classes from './IconSwitch.module.css'
import './IconSwitch.css';


export function IconSwitch({ icon, onSwitch }) {
  return (
    <>
    <div className='icon-container'>
    <button className="material-icons" onClick={ onSwitch }>{ icon }</button>

    </div>
    </>
  )
}
