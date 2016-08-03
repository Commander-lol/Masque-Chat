import FacebookLogin from '../components/FacebookLogin';
import { connect } from 'react-redux';
import { logIn } from '../actions/facebook';
import { push } from 'react-router-redux';

function mapStateToProps(state) {
  return {
    loggedIn: state.facebook.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    redirect: () => dispatch(push('/facebook/list')),
    logIn: (email, password) => dispatch(logIn(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLogin);
