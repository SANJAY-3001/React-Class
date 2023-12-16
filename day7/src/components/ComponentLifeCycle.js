import React from "react";
export default class ComponentLifeCycle extends React.Component {
     constructor(props)
     {
        super(props);
        this.state={favColor:"Green"}
     }
     componentDidMount()
     {
        setTimeout(()=>{this.setState({favColor:'red'})},5000)
     }
     shouldComponentUpdate()
     {
        return true
     }
     getSnapshotBeforeUpdate(preVal,preState)
     {
        document.getElementById("id1").innerHTML='Previous value :'+preState.favColor;
    }
    componentDidUpdate()
    {
         document.getElementById("id2").innerHTML='Current value :'+this.state.favColor;
    }
    componentWillUnmount()
    {
        
    }
    render() {
        return (
            <div>
            <h1>My Favourite color is {this.state.favColor}</h1>
            <p id="id1"></p>
            <p id="id2"></p>
            </div>
        );
    }
}