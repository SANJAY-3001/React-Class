import React from 'react'
function Display(props)
{
    return(
        <h1>{props.name}</h1>
    )
}
export default function List() {
    const name=['Dhawan','virat','rohit','bhuvi'];
    const stname=name.map((val)=><Display name={val}/>)
  return (
    <div style={{backgroundColor :'red'}}>
    {stname}
    </div>
  )
}
