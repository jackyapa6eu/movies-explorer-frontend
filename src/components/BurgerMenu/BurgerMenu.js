import './BurgerMenu.css';
import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import BurgerMenuImg from '../../images/burger-menu-icon.svg';

function BurgerMenu({ setisMobileMenuOpened }) {
  function openBurgerMenu() {
    setisMobileMenuOpened(true);
  }
  return (
    <button className="burger-menu" onClick={openBurgerMenu}>
      <SVG className='burger-menu__icon' src={BurgerMenuImg}/>
    </button>
  );
}

BurgerMenu.propTypes = {
  setisMobileMenuOpened: PropTypes.func,
};

export default BurgerMenu;
