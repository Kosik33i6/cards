import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import styles from './Column.scss';

class Column extends Component {
  static propTypes = {
    title: PropTypes.node,
    cards: PropTypes.array,
    icon: PropTypes.string,
  }
  state = {
    cards: this.props.cards || [],
  }
  render() {
    console.log(this.props);
    const {title, icon} = this.props;
    const {cards} = this.state;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title} <span className={styles.icon}><Icon name={icon}/></span></h3>
        {cards.map(cardData => (
          <Card key={cardData.key} {...cardData}/>
        ))}
      </section>
    );
  }
}

export default Column;
