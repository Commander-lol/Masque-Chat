import React, { PropTypes } from 'react';
import cx from 'classnames';

import Button from './BurgerButton';
import css from './styles.css';


const OffCanvas = ({ visible, children, menuContent, clickAction }) => (
  <div className={cx(css.wrapper, visible ? css.visible : null)}>
    <div className={css.canvas}>
      <div className={css.menu}>
        {menuContent}
      </div>
      {visible && <div onClick={clickAction} className={css.overlay}> </div>}
      <Button onClick={clickAction} />
      {children}
    </div>
  </div>
);

OffCanvas.propTypes = {
  visible: PropTypes.bool.isRequired,
  clickAction: PropTypes.func.isRequired,
  children: PropTypes.node,
  menuContent: PropTypes.node,
};

export default OffCanvas;
export const BurgerButton = Button;
