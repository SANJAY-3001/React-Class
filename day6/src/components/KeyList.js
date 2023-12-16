import React from 'react'
export default function KeyList() {
    const fruits=['Apple','Orange','Grapes','Mango'];
    const frname=fruits.map((val,index)=><li key={index} type='none'>{index}={val}</li>)
  return (
    <div>
      {frname}
    </div>
  )
}
