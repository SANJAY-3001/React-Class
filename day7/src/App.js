import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import TryCatch from './components/TryCatch';
import ComponentLifeCycle from './components/ComponentLifeCycle';
import LifecycleFunctional from './components/LifecycleFunctional';

function App() {
  return (
    <div className="App">
    <ErrorBoundary>
    <Hero heroName='Joker'></Hero>
    </ErrorBoundary>
  <TryCatch fruit='Onion'></TryCatch>
    <ComponentLifeCycle></ComponentLifeCycle>
    <LifecycleFunctional></LifecycleFunctional>
    </div>
  );
}

export default App;
