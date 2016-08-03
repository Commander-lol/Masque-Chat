import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import OffCanvas from '../components/OffCanvas';
import * as MenuActions from '../actions/menu';

import AppMenu from './AppMenu';

const App = ({ menuOpen, openMenu, closeMenu, children }) => (
  <OffCanvas
    visible={menuOpen}
    clickAction={menuOpen ? closeMenu : openMenu}
    menuContent={<AppMenu />}
  >
    <main>
      {children}
    </main>
  </OffCanvas>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    menuOpen: state.menuOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MenuActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
