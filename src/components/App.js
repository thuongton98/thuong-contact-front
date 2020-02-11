import React, { Component } from 'react';

import Nav from './../components/Nav.js';
import URL from './../routes/URL.js';
import Footer from './../components/Footer.js';
import { BrowserRouter as Route } from 'react-router-dom';



class App extends Component {
  
  
  render() {
    
    return (
      
      <Route>
        
        <Nav/>
        <URL/>
        <Footer/>
      

      </Route>  
      
      
      
  
      
    );
  }
}

export default App;