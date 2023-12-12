import { useState } from "react";

function StateHoldObject()
{
    const[batsman,setBatsman]=useState({Name:"Dhawan",Timing:93,Power:89,Speed:95})
    const changePower=()=>{
        setBatsman((prevState)=>{return{...prevState,Power:93}})
    }
    const changeTiming=()=>{
        setBatsman((prevState)=>{return{...prevState,Timing:95}})
    }
    return(
        <div>
        <h1>BatsMan name is {batsman.Name}</h1>
        <h1>BatsMan timing is {batsman.Timing}</h1>
        <h1>BatsMan Power is {batsman.Power}</h1>
        <h1>BatsMan Speed is {batsman.Speed}</h1>
        <button onClick={changePower}>UpdatePower</button>
        <button onClick={changeTiming}>UpdateTiming</button>
        </div>
    )
}
export default StateHoldObject;