import React, { Component } from 'react';
import UserForm from './UserForm.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  createUser = dataUser => {
    console.log(dataUser);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
