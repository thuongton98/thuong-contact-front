import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <main>
        <section className="section1 section2">
          <h1>Amelia Woods</h1>
          <p>I am a Graphic &amp; Web Designer based in New York, specializing in User Interface Design and Development.</p>
        </section>
        <section className="box section3">
          <div className="box item">
            <img src="images/about-1.png" alt="" />  
            <div>
              <h4>548</h4>
              <p>PROJECT COMPLETED</p>
            </div>
          </div>
          <div className="box item">
            <img src="images/about-2.png" alt="" />  
            <div>
              <h4>1465</h4>
              <p>WORKING HOURS</p>
            </div>
          </div>
          <div className="box item">
            <img src="images/about-3.png" alt="" />  
            <div>
              <h4>612</h4>
              <p>POSITIVE FEEDBACKS</p>
            </div>
          </div>
          <div className="box item">
            <img src="images/about-4.png" alt="" />  
            <div>
              <h4>735</h4>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </section>
        <section className="box section4">
          <div className="box-50">
            <img src="images/about.png" alt="" />
          </div>
          <div className="box-50 item-50">
            <h1>About me</h1>
            <p>Given let waters air sea had you'll, may seed abundantly fish.Wre, you'll earth forth winged above brought. Own darkness they're him can't fourth sea place have.</p>
            <div>
              <p>so the above May stars cattle fruitful face shall. Tree it; winged. Every signs male firmament us. Morning him.</p>
            </div>
            <img src="images/about1.png" alt="" />
          </div>
        </section>
        <section className="section1 section5">
          <h1>Need a Project?</h1>
          <p className="p">Let us know what you're looking for in an egency. We'll take a look and see if this could be the start of something beautiful.</p>
          <button className="button-i">LET'S TALK
          </button>
        </section>
      </main>
        );
    }
}

export default About;