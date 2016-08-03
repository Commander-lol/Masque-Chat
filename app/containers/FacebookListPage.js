import FacebookList from '../components/FacebookList';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    loggedIn: state.facebook.loggedIn,
    fapi: state.facebook.api,
  };
}


export default connect(mapStateToProps)(FacebookList);
