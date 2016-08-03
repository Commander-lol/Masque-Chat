import React, { Component, PropTypes } from 'react';

import css from './styles.css';

const Row = ({ children }) => (
  <div className={css.row}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default class FacebookLogin extends Component {

  static propTypes = {
    logIn: PropTypes.func.isRequired,
    redirect: PropTypes.func.isRequired,
  }

  state = {
    username: '',
    password: '',
    viewPassword: false,
  }

  update = prop => ({ target: { value } }) => this.setState({ [prop]: value })

  loginAndRedirect = () => {
    this.props.logIn(this.state.username, this.state.password);
    this.props.redirect();
  }

  render() {
    const { viewPassword, username, password } = this.state;
    return (
      <div>
        <Row>
          <label htmlFor="username">Username</label>
          <input type="email" id="username" onChange={this.update('username')} value={username} />
        </Row>
        <Row>
          <label htmlFor="password">Password</label>
          <input type={viewPassword ? 'text' : 'password'} id="password" onChange={this.update('password')} value={password} />
        </Row>
        <Row>
          <button className={css.button} onClick={this.loginAndRedirect}>log in</button>
        </Row>
      </div>
    );
  }
}
