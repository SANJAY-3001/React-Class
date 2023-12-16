import React from 'react'

function Display(props){
        return(
            <div>
            <h1>id:{props.list.id} name:{props.list.name} age:{props.list.age}</h1>
            </div>
        )

}
export default function ObjectList() {
    const college=[{id:101,name:'Sanjaaa',age:18},
    {id:102,name:'Sandu',age:19},
    {id:103,name:'Selva',age:19},
    {id:104,name:'Sachin',age:18}]
    const stcollege=college.map((list)=><Display list={list}/>)
  return (
    <div>
      {stcollege}
    </div>
  )
}
