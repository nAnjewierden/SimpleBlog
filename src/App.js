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
      <Container >
      
      <NavigationBar/>
        
        <nav className="nav-bar">
          <Link to='/' className="nav-item"><h4>Posts</h4></Link>
          <Link to='/newPost' className="nav-item"><h4>New Post</h4></Link>
          
        </nav>
        <div className='routeDiv'>
        {routes}
        </div>
      </Container>
    );
  }
}

export default App;
