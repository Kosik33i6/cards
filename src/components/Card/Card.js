import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

const Card = (props) => {
  const {title} = props;
  return (
    <div className={styles.component}>{title}</div>
  );
};

Card.propTypes = {
  title: PropTypes.node,
};

export default Card;
