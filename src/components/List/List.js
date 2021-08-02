import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import styles from './List.scss';

class List extends Component {
    state = {  }
    render() {
        return (
            <section className={styles.component}>
                <Hero/>
            </section>
        );
    }
}

export default List;