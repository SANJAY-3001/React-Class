import React from 'react'

export default function TryCatch({fruit}) {
    let content=fruit;
    try{
        if(fruit === 'Onion')
        {
            throw new Error('not a fruit')
        }
    }
        catch(e)
        {
            
            console.log('not a fruit');
            content='Error:Not a fruit'
        }
        finally
        {
            console.log('always executed')
        }
  return (
    <div>
      {content}
    </div>
  )
}
