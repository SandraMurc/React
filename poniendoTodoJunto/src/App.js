import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Persona from './components/Persona';
import Interruptor from './components/Interruptor';

function App() {
  return (
    <div className="App">
      <Navbar title='Tarea: Apoyalo' className='mb-4' />
      <div className="container">
        <div className='row'>
          <div className='col-6'>
            <h2>Personas:</h2>
            <Persona firstName='Andres' lastName='Quintero' age={40} hairColor='Brown' />
            <Persona firstName='Laila' lastName='Jimenez' age={38} hairColor='Yellow' />
          </div>
          <div className='col-6'>
            <Interruptor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
