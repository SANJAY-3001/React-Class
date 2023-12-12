import { useState } from "react";

function StateFunction()
{
    const[carName,setCarName]=useState("Lambo");
    const changeCarName=()=>setCarName("Roles Royal");
    const[count,setCount]=useState(0);
    return(
        <div>
        <h1>My Car Name is{carName}</h1>
        <button onClick={changeCarName}>Click</button>
        <h1>COUNT {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        <button onClick={()=>setCount(count-1)}>Decreament</button>
        </div>
    )
}
export default StateFunction;