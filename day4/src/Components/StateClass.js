import { Component } from "react";

class StateClass extends Component
{
    state={
        color:"Green"
    }
    handleChange=()=>{this.setState({color:"Red"})}
    render()
    {
        return(
            <div>
            <h1>Favourite color is{this.state.color}</h1>
            <button onClick={this.handleChange}>CLICK</button>
            </div>
        )
    }
}
export default StateClass;