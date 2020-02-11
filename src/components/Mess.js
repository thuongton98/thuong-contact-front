import React, { Component } from 'react';
import axios from 'axios';

const Contact = props => (
  <tr>
    <td>{props.contacts.name}</td>
    <td>{props.contacts.email}</td>
    <td>{props.contacts.title}</td>
    <td>{props.contacts.comment}</td>
    <td>
      <a href="/#" onClick={() => { props.deleteContact(props.contacts._id) }}>delete</a>
    </td>
  </tr>
)

class mess extends Component {
  constructor(props) {
    super(props);

    this.deleteContact = this.deleteContact.bind(this)

    this.state = {contacts: []};
  }

  componentDidMount() {
    axios.get('https://thuong-contact.herokuapp.com/contact')
      .then(response => {
        this.setState({ contacts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  deleteContact(id) {
    axios.delete('https://thuong-contact.herokuapp.com/contact'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      contacts: this.state.contacts.filter(el => el._id !== id)
    })
  }
  contactList() {
    return this.state.contacts.map(currentcontact => {
      return <Contact contacts={currentcontact} deletecontact={this.deletecontact} key={currentcontact._id}/>;
    })
  }
    render() {
        return (
            <div>
        <h3>LIST Mess:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
          { this.contactList() }
          </tbody>
        </table>
      </div>
        );
    }
}

export default mess;
