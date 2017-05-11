import React, { Component } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const email = this.email.value.trim();
    const password = this.password.value.trim();

    Meteor.loginWithPassword({ email }, password, (err) => {
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
          <h1>Short Link</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.handleSubmit.bind(this)} className="boxed-view__form">
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
