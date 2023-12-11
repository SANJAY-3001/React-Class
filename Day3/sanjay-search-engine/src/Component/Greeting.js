import React from 'react';
const Greeting = ()=>
{
    const username="Sanjay";
    const date = new Date().toLocaleDateString('en-us',
    {
        weekday:'long',
        month:'long',
        day:'numeric',
        year:'numeric'
    });
    return(
        <div>
            <h2>Hello, {username}!</h2>
            <p>Welcome to our website. Today is {date}.</p>
        </div>
    )
}
export default Greeting;