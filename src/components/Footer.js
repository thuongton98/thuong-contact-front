import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
        <div className="container-fluid footer box">
          <div className="line box-footer"> 
            <h4>Piroll Design, Inc.</h4>
            <p>Ⓒ 2017 Piroll. All rights reserved.
            </p>
            <p>Designed by robirurk.</p>
          </div>
          <div className="line box-footer-1 bottom">
            <p>hello@piroltheme.com</p>
            <p>+44 987 065 908</p>
          </div>
          <div className="box box-center bottom">
            <div className="line bpx-footer-2 ">
              <p><a href="/#">Projects</a></p>
              <p><a href="about">About</a></p>
              <p>
                <a href="/#">Services</a>
              </p>
              <p> <a href="/#">Carrer</a> </p>
            </div>
            <div className="line box-footer-2">
              <p><a href="/#">News</a></p>
              <p><a href="/#">Events</a></p>
              <p><a href="/#">Contact</a></p>
              <p><a href="/#">Legals</a></p> 
            </div>
            <div className="line box-footer-3">
              <p><a href="/#">Facebook</a></p>
              <p><a href="/#">Twitter</a></p>
              <p><a href="/#">Instagram</a></p>
              <p><a href="/#">Dribbble</a></p>
            </div>
          </div>
        </div>
      </footer>
        );
    }
}

export default Footer;