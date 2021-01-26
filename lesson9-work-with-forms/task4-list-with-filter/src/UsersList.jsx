import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    let userList =
      this.props.value === ''
        ? this.props.users
        : this.props.users.filter(user => user.name.toLowerCase().includes(this.state.value));

    return (
      <div>
        <Filter filterText={this.state.name} onChange={this.handleChange} count={userList.length} />
        <ul className="users">
          {userList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
