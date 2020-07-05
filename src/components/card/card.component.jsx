import React from 'react'
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt='Cartoon' src={`https://robohash.org/${props.cartoon.id}?set=set3`} />
        <h2>{props.cartoon.name}</h2>
        <p>{props.cartoon.email}</p>
    </div>
)
