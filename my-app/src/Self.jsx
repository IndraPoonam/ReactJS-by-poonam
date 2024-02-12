import React from 'react'

function Self({name,age,city}) {
  console.log(name,age,city)
  return (
    <div><h1>my first function{name}{age}{city}</h1></div>
  )
}

export default Self;