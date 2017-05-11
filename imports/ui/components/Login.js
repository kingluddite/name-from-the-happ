import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Short Link</h1>

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
            <button className="button" type="submit">Login</button>
          </form>

          <Link to="/signup">Have an account?</Link>
        </div>
        {/* END .boxed-view__box */}
      </div>
      // END .boxed-view
    );
  }
}

export default Login;
