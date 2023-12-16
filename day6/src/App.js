import './App.css';
import List from './components/List';
import KeyList from './components/KeyList';
import ObjectList from './components/ObjectList';
import ObListnoDisp from './components/ObListnoDisp';
import BasicButtons from './components/MuiButton';
import ComplexGrid from './components/MuiGrid';

function App() {
  return (
    <div className="App">
    <List></List>
    <KeyList></KeyList>
    <ObjectList></ObjectList>
    <ObListnoDisp></ObListnoDisp>
    <BasicButtons></BasicButtons>
    <ComplexGrid></ComplexGrid>
    </div>
  );
}

export default App;
