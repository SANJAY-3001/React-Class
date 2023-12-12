import './App.css';
import PropsClass from './Components/PropsClass';
import PropsFunction from './Components/PropsFunction';
import FunctionnoProps from './Components/FunctionnoProps';
import StateClass from './Components/StateClass';
import StateFunction from './Components/StateFunction';
import StateHoldObject from './Components/StateHoldObject';

function App() {
  return (
    <div className="App">
    <PropsFunction name="Sanjay" class="It-c"></PropsFunction>
    <PropsClass college="SKCT" Place="CBE"></PropsClass>
    <FunctionnoProps game="Cricket" movie="Harry Potter"></FunctionnoProps>
    <StateClass></StateClass>
    <StateFunction></StateFunction>
    <StateHoldObject></StateHoldObject>
    </div>
  );
}

export default App;
