import React from 'react'

function Card(props) {
  return (
    <div>
        <img src={props.img}></img>
        <p>{props.data}</p>
        hii
    </div>
  )
}

export default Card;