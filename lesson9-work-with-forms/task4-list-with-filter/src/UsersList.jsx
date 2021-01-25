import React, { Component } from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      filtering: null,
    };
  }

  handleChange = event => {
    const { name, value, checked, type } = event.target;

    const val = type === 'checkbox' ? checked : value;

    this.setState({
      [name]: val.toLowerCase(),
    });
  };

  render() {
    let usersList = this.props.users;

    const filteringUserList = usersList.filter(user =>
      user.name.toLowerCase().includes(this.state.name) ? user.name : false,
    );

    let count = filteringUserList.length;

    return (
      <div>
        <Filter filterText={this.state.name} onChange={this.handleChange} count={count} />
        <ul className="users">
          {filteringUserList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
