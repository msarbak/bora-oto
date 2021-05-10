import scirocco from './scirocco.jpg';
import golf from './golf.jpg';
import passat from './passat.jpg';
import polo from './polo.jpg';
import oz from './jant.png';
import konig from './konig.png'
import bbs from './bbs.png'
import enkei from './enkei.png'
import bmw from './bmw.png'
import merso from './merso.jpg'
import './App.css';
//import User from "./components/User";
import Navbar from "./components/Navbar"
import Ses from "./components/Ses"




function App() {
  return (
    <div className="container">

     
      <Navbar title = "BORA OTO | VW Servis"/>
      <Ses/>
      <br/> <br/> 
      <hr/> <h1>ARABA MODELLERİMİZ</h1><hr/>
      <br/> <br/>
      <img src={scirocco} className="mr-4 car scirocco" alt="scirocco" />
      <img src={golf} className="mr-4 car golf" alt="golf" />
      <img src={passat} className="mr-4 car passat" alt="passat" />
      <img src={polo} className="mr-4 car polo" alt="polo" />
      <br/> <br/>  <br/> 
      <hr/> <h1>JANT MODELLERİMİZ</h1><hr/>
      <br/> <br/>
      <img src={oz} className="App-logo mr-4" alt="oz" />
      <img src={konig} className="App-logo mr-4" alt="konig" />
      <img src={bbs} className="App-logo mr-4" alt="bbs" />
      <img src={enkei} className="App-logo mr-4" alt="enkei" />
      <img src={bmw} className="App-logo mr-4" alt="bmw" />
      <img src={merso} className="App-logo" alt="merso" />
    </div>
  );
}

export default App;


/* <div className="App">
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> 
      </div>*/