import React, { Component } from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
  }

  handleSubmit(e) {
    const email = this.email.value.trim();
    const password = this.password.value.trim();

    e.preventDefault();

    Accounts.createUser({ email, password }, (err) => {
      // console.log('Signup callback', err);
      if (err) {
        this.setState({
          error: err.message,
        });
      } else {
        this.setState({
          error: '',
        });
      }
    });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Signup</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form
            onSubmit={this.handleSubmit.bind(this)}
            className="boxed-view__form">
            <input
              type="email" noValidate
              ref={(email) => { this.email = email; }}
              placeholder="Email" />
            <input
              type="password"
              ref={(password) => { this.password = password; }}
              name="password" placeholder="Password"/>
            <button className="button" type="submit">Signup</button>
          </form>
          <Link to="/">Already have an account?</Link>
        </div>
      </div>
    );
  }
}

export default Signup;
