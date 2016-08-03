import React, { PropTypes } from 'react';
import css from './ChatItem.css';

const ChatItem = ({img, name, snippet, ...rest}) => (
  <div className={css.container}>
    {console.log(rest) && <span>yes</span>}
    <img className={css.image}src={img} alt={name} />
    <div className={css.text}>
      <span className={css.title}>{name}</span>
      <span>{snippet}</span>
    </div>
  </div>
)

export default ChatItem;
