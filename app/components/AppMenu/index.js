import React, { PropTypes } from 'react';
import css from './styles.css';
import cx from 'classnames';

const doThenClose = (func, close) => {
  func();
  close();
};

const AppMenu = ({ closeMenu, facebookLogged, facebookLogging, go }) => (
  <ul className={css.list}>
    <li className={css.header}>Accounts</li>
    <li
      className={css.link}
      onClick={() => doThenClose(() => (facebookLogged ? go('/facebook/list') : go('/facebook/login')), closeMenu)}
    >
      Facebook
      <i
        className={cx('fa fa-fw', facebookLogged ? 'fa-check' : facebookLogging ? 'fa-spinner fa-spin' : 'fa-close')}
        style={{
          color: facebookLogged ? 'green' : facebookLogging ? 'yellow' : 'red',
        }}
      >
      </i>
    </li>
  </ul>
);

AppMenu.propTypes = {
  facebookLogging: PropTypes.bool.isRequired,
  facebookLogged: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
};

export default AppMenu;
