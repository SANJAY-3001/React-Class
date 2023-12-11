import ClassComponent from './Component/ClassComponent';
import Greeting from './Component/Greeting';
import FunctionComponent from './Component/funtioncomponent';
import ClassCar from './Component/ClassCar';
function App() {
  return (
    <div>
      <FunctionComponent />
      <ClassComponent />
      <Greeting></Greeting>
      <ClassCar />
    </div>
  );
}

export default App;
