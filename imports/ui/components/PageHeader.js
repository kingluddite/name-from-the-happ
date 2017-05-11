import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
// import { onAuthChange } from './../../startup/client/routes';

class PageHeader extends Component {
  handleLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h1>Name From The Happ</h1>
        <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default PageHeader;
