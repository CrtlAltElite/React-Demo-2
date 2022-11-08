import React from 'react'

export default function Names({ people }) {
  return (
      <>
        <div>All The names entered:</div>
        <ul>
            {people.map((name, index)=><li key={index}>{name}</li>)}
        </ul>
      </>
  )
}
