import React, { Component } from 'react';
import axios from 'axios';

const Redirect = require("react-router-dom").Redirect;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      isRedirect: false,
      name:'',
      email: '',
      title:'',
      comment:'',
      
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  onChangeComment(e) {
    this.setState({
      comment: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      isRedirect:true
    });
    const contact = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      comment: this.state.comment
    }

    console.log(contact);
    
    axios.post('https://thuong-contact.herokuapp.com/contact/add', contact)
      .then(res => console.log(res.data));
    
    this.setState({
      name:'',
      email: '',
      title:'',
      comment:'',
    })
  }
    render() {
      if (this.state.isRedirect === true){
      
        return <Redirect to="/"/>
      }
        return (
            <main>
        <section className="box section1-1">
          <div className="section-i-1-2 section-i-1">
            <h1 className="p">Contact Info:</h1>
            <p className="p">To give give beginning divide, cattle. Give moving won't, there the abundantly she'd she'd brought air upon. Light hath subdue. Life dys creature upon first heaven gathering dry.</p>
            <div>
              <p><b>Address:</b> 10111 Santa Monica Boulevard, LA</p>
              <p><b>Phone:</b> +44 987 065 908</p>
              <p><b>Email:</b> info@Example.com</p>
              <p><b>Fax:</b> +44 987 065 909</p>
            </div>
          </div>
          <div className="section-i-1-3 section-i-1">
            <form onSubmit={this.onSubmit}>
              <div className="form-group box">
                <input onChange={this.onChangeName} value={this.state.name} type="name" className="form-i form-50 right" placeholder="Your Name" />
                <input onChange={this.onChangeEmail} value={this.state.email} type="email" className="form-i form-50 left" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input onChange={this.onChangeTitle} value={this.state.title} type="text" className="form-i" placeholder="Your Title" />
              </div>
              <div className="form-group">
                <textarea onChange={this.onChangeComment} value={this.state.comment} className="form-i" rows={6} placeholder="Your Comment" />
              </div>
              <div className="form-group">
            <input className="button-i" type="submit" value="Submit"  />
          </div>
            </form>
          </div>
        </section>
        <section className="section1 map">
          <iframe title="myFrame" className="map-height" src="https://maps.google.com/maps?width=1170&height=470&hl=en&q=HUE%2C%20Vietnam+(Thuong)&ie=UTF8&t=&z=10&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
          </section>
      </main>
        );
    }
}

export default Contact;