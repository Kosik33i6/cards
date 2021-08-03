import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import Column from '../Column/Column';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';
import styles from './List.scss';

class List extends Component {
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  state = {
    columns: this.props.columns || [],
  }

  addColumn(title){
    console.log(title);
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    const {title, image, description} = this.props;
    return (
      <section className={styles.component}>
        <Hero title={title} image={image}/>
        {ReactHtmlParser(description)}
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    );
  }
}

export default List;
