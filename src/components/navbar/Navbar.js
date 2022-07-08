

import React, { useEffect, useState } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logoImg from './styles/logo.jfif'

import styles from './styles/Navbar.module.css';
import SearchResult from '../../pages/search-result-page/SearchResult';

function Navbar() {
  const [show, handleShow] = useState(false);
  const moviesData = useSelector(state => state.allMovies);
  const movies = moviesData ? (moviesData.movieCollection) : [];
  const [search, setSearch] = useState([]);
  const [isSearchActive, setSearchActive] = useState(false);
  const [isImageClicked, setIsImageClicked] = useState(false);


  const clearInputField = () => {
    setSearch([]);
    setSearchActive(false);
  };



  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 95 ? handleShow(true) : handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <>
      <div className={`${styles.navbar} ${show && styles.navbarColor}`}>
        <div className={styles['flex-container']}>
          <div className={styles['flex-container-logo']}>
            <NavLink to="/" className={styles['netflix-logo']}>
              <img
                className={styles.logo}
                src={logoImg}
                alt="We Surf Logo"
              />
            </NavLink>
            <div className={styles.links}>
              <NavLink className={styles.link} onClick={clearInputField} to="/" exact activeStyle={{ fontWeight: 'bold' }}>Home</NavLink>
              <NavLink className={styles.link} onClick={clearInputField} to={{ pathname: '/hero/', state: { category: 'ActionMovies', title: 'Action' } }} exact activeStyle={{ fontWeight: 'bold' }}>Hero Section</NavLink>
              <NavLink className={styles.link} onClick={clearInputField} to={{ pathname: '/featured/', state: { category: 'TopRated', title: 'Featured Movies' } }} exact activeStyle={{ fontWeight: 'bold' }}>Featured Movies</NavLink>
              <NavLink className={styles.link} onClick={clearInputField} to={{ pathname: '/featuredtv/', state: { category: 'TopRated', title: 'Featured Movies' } }} exact activeStyle={{ fontWeight: 'bold' }}>Featured TV Series</NavLink>
            </div>
          </div>
         
        </div>
      </div>
      {isSearchActive
        ? (
          <SearchResult
            setIsImageClicked={setIsImageClicked}
            setSearchActive={setSearchActive}
            movies={search}
          />
        )
        : null}
    </>
  );
}

export default React.memo(Navbar);
