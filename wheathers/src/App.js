import React from 'react';
import './App.css';
import {Avatar} from './components/avatar/avatars'
import { Counter } from './components/counter/mains';
import { Weather } from './components/weather';

class App extends React.Component {

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Weather></Weather>
          
          {/* <Counter /> */}
        {/* <div id="main">      
       < Avatar name="Ivan Ivanov"  twitter='my tw' facebook = 'accauntFacebook'/>
       < Avatar name="Oleg Petrov"  twitter='my tw' facebook = 'accauntFacebook'/>
       < Avatar name="Oleg Petrov"  twitter='my tw' facebook = 'accauntFacebook'/>
       </div> */}
        </header>
      </div>
    );
  }
}
export default App;
