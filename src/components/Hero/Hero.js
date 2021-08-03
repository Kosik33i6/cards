import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './Hero.scss';

const Hero = (props) => {
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(props.title)}</h2>
      <img className={styles.image} src={props.image} alt="hero" />
    </header>
  );
};

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.node,
};

export default Hero;
