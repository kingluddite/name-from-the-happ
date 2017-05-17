import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
// import { onAuthChange } from './../../startup/client/routes';
import { Link } from 'react-router';

class PageHeader extends Component {
  handleLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h1>Name From The Happ</h1>
        <ul>
          <li><Link to="/presentationview">PresentationView</Link></li>
          <li><Link to="/presentationedit">PresentationEdit</Link></li>
          <li><Link to="/presentationlist">PresentationList</Link></li>
          <li><Link to="/presentationadd">PresentationAdd</Link></li>
        </ul>
        <button onClick={this.handleLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}

export default PageHeader;
