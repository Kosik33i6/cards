import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import styles from './List.scss';

class List extends Component {
  static propTypes = {
      title: PropTypes.node,
      children: PropTypes.node,
      image: PropTypes.string,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  state = {  }
  render() {
    const {title, image, children} = this.props;
    return (
      <section className={styles.component}>
        <Hero title={title} image={image}/>
        {children}
      </section>
    );
  }
}

export default List;
