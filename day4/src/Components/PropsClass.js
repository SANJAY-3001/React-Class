import React ,{Component} from 'react';
class PropsClass extends Component
{
    render()
    {
        return(
            <div>
            <h1>My College name is {this.props.college}.</h1>
            <h1>Place {this.props.Place}.</h1>
            </div>
        )
    }
}
export default PropsClass;