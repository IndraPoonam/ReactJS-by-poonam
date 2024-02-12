import React from 'react'

function Sum() {
    let sum=0;
    for(let i=1; i<=20; i++){
        sum=sum+i;

    }
  return (
    <div>
        <h1>{sum}</h1>
    </div>
  )
}

export default Sum;