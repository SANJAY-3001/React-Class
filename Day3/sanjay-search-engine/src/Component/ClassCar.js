import { Component } from "react";
import img from '../assets/lamborghini-theme-3.jpg'
import FuncCar from './funcCar';
class ClassCar extends Component
{
    render()
    {
        return(
            <div>
                <h1>Lamborghini</h1>
                <img src={img} />
                <FuncCar />
            </div>
        );
    }
}

export default ClassCar;