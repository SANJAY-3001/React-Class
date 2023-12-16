export default function ObListnoDisp() {
    const Fruits=[{Price:101,name:'Orange'},
    {Price:102,name:'Apple'},
    {Price:103,name:'Mango'},
    {Price:104,name:'Grape'}]
    const disfruit=Fruits.map((list)=><li> Price: {list.Price} frname: {list.name}</li>)
  return (
    <div >
    {disfruit}
    </div>
  )
}
