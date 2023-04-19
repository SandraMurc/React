import Main from './componentes/Main';
import Header from './componentes/Header';
import SubContents from './componentes/SubContents';
import Advertisement from './componentes/Advertisement';
import Navigation from './componentes/Navigation';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='navigationMain'>
        <Navigation/>
        <Main>
          <div className='tresSubContents'>
            <SubContents/>
            <SubContents/>
            <SubContents/>
          </div>
          <Advertisement/>  
        </Main>
      </div>
    </div>
  );
}

export default App;
