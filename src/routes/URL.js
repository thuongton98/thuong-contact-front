import React, { Component } from 'react';
import {
 
  
    Route
    
  } from "react-router-dom";
  
import Home from './../components/Home.js';
import Contact from './../components/Contact.js';
import About from './../components/About.js'
import Mess from './../components/Mess.js'




class URL extends Component {
  
      
    render() {
        
        return (
            <div>
                
                <Route exact path="/" component={Home}>
                    </Route>
                <Route exact path="/home" component={Home}>
                    </Route>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path='/about' component={About}/>
                <Route exact path="/mess" component={Mess}/>
 
                
            </div>
        );
    }
}

export default URL;