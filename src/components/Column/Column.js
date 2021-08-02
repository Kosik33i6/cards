import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';

class Column extends Component {
  static propTypes = {
    title: PropTypes.node,
  }
  state = {  }
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
      </section>
    );
  }
}

export default Column;
