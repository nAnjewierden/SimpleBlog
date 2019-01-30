import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Container} from 'reactstrap'
// import './reset.css'
//import './App.css';
import routes from './Routes/Routes'
import NavigationBar from './Components/NavigationBar/NavigationBar'

class App extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '100vh'}}>
      <Container>
      
      <NavigationBar/>
        
        
        <div className='routeDiv'>
        {routes}
        </div>
      </Container>
      </div>
    );
  }
}

export default App;
