import FacebookList from '../components/FacebookList';
import { connect } from 'react-redux';
import { keyBy } from 'lodash';
import * as Facebook from '../actions/facebook';

function mapStateToProps(state) {
  return {
    loggedIn: state.facebook.loggedIn,
    fapi: state.facebook.api,
    threads: state.facebook.threads,
    threadsById: keyBy(state.facebook.threads, 'threadID'),
    users: state.facebook.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: (ids, api) => dispatch(Facebook.loadUsersWith(ids, api)),
    loadThreads: (start, end, api) => dispatch(Facebook.loadThreadsWith(start, end, api)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookList);
