import React from 'react'

function PropsFunction(props) {
  return (
    <div>
      <h1>My Name is {props.name}.</h1>
      <h1>class {props.class}.</h1>
    </div>
  )
}
export default PropsFunction;