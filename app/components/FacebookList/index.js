import React, { Component, PropTypes } from 'react';

export default class FacebookList extends Component {

  static propTypes = {
    loggedIn: PropTypes.bool.isRequired,
    fapi: PropTypes.func.isRequired,
  }

  state = {
    threads: [],
  };

  componentDidMount = async () => {

  };

  render() {
    return <div>{String(this.props.loggedIn)}</div>;
  }
}
