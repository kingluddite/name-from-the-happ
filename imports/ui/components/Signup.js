import React, { Component } from 'react';
import { Link } from 'react-router';

class Signup extends Component {
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Signup</h1>

          <form className="boxed-view__form">
            <input
              type="email"
              ref={(email) => { this.email = email; }}
              placeholder="Email"
              noValidate />
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
