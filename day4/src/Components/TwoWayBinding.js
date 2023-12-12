import React,{ useState } from 'react';

export default function TwoWayBinding()
{
    const[name,setName]=useState("")
    const changeName = (event) => setName(event.target.value)
    return(
        <div>
            <h1>Type : </h1>
            <input onChange={changeName} value={name}></input>
            <p>Name is {name}</p>
        </div>
    )
}