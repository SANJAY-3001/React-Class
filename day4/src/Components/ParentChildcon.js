function Parent()
{
    return(
        <div>
        <h1>Parent</h1>
        <Children result={10000}></Children>
        </div>
    )
}
function Children(props)
{
    return(
        <h1>Child Value {props.result}</h1>
    )
}
export default Parent;