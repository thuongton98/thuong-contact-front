import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm">
      <div className="container">
        <a className="navbar-brand" href="/"><img src="images/logo.png" alt="logo" /></a>
        <button className="outline" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="fas fa-bars" /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
            <Link className="nav-link" to='/home'>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/about'>About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}
}

export default Nav;