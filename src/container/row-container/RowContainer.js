
import React from 'react';
import Row from '../../components/row/Row';
import styles from './styles/RowContainer.module.css';

const RowContainer = () => (
  <div className={styles.container}>
    <Row category="Trending" isNetflixRow>Hero Section</Row>
    <Row category="TopRated">Featured Movies</Row>
    <Row category="ComedyMovies">Featured TV Shows</Row>
   
  </div>
);

export default RowContainer;
