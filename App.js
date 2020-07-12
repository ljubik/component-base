import React from 'react';
import {Button} from "./components/button/Button";
import './App.css';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Button className="btn-base" size="btn-main" disabled={false}/>
        <br></br>
        <Button className="btn-base" size="btn-main" disabled={true} color="">DAISABLE</Button>
        <br></br>
        <Button className="btn-base" size="btn-secondary" disabled={false} >SECOND</Button>
        <br></br>
        <Button className="btn-base" size="btn-secondary" disabled={true} >btn-secondary</Button>
        <br></br>
        <Button className="btn-base" size="btn-tertiary" disabled={false} color="">Start new project</Button>
        <br></br>
        <Button className="btn-base" size="btn-tertiary" disabled={true}>btn-tertiary</Button>
      </header>
    </div>
  );
  
}


export default App;
