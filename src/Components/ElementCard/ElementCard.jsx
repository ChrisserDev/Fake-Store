import React from 'react'
import './ElementCard.css'

function ElementCard({element}) {
  return (
    <div className='element-card'>
        <img src={element?.image}/>
        <h3>{element?.title}</h3>
        <p>{element?.category}</p>
        <p>{element?.price + "$"}</p>
    </div>
  )
}

export default ElementCard