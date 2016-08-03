import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import * as FacebookActions from '../actions/facebook';
import * as MenuActions from '../actions/menu';

import AppMenu from '../components/AppMenu';

function mapStateToProps(state) {
  return {
    facebookLogging: state.facebook.loggingIn,
    facebookLogged: state.facebook.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(FacebookActions, dispatch),
    ...bindActionCreators(MenuActions, dispatch),
    go: place => dispatch(push(place)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu);
