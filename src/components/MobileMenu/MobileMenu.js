import './MobileMenu.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MobileLink from '../MobileLink/MobileLink';
import AccountLink from '../AccountLink/AccountLink';

function MobileMenu({ setisMobileMenuOpened, isMobileMenuOpened }) {
  const history = useHistory();
  const mobileMenuActiveSelector = isMobileMenuOpened ? 'mobile-menu_active' : '';
  function closeMobileMenu() {
    setisMobileMenuOpened(false);
  }
  function openAccount() {
    history.push('/profile');
    closeMobileMenu();
  }
  return (
    <div className={`mobile-menu ${mobileMenuActiveSelector}`}>
      <nav className="mobile-menu__navigation">
      <button className="mobile-menu__close-btn" onClick={closeMobileMenu}/>
        <MobileLink
          setisMobileMenuOpened={setisMobileMenuOpened}
          path="/"
          linkText="Главная"
        />
        <MobileLink
          setisMobileMenuOpened={setisMobileMenuOpened}
          path="/movies"
          linkText="Фильмы"
        />
        <MobileLink
          setisMobileMenuOpened={setisMobileMenuOpened}
          path="/saved-movies"
          linkText="Сохраненные фильмы"
        />
        <AccountLink openAccount={openAccount} place={'mobile-menu'}/>
      </nav>
    </div>
  );
}

MobileMenu.propTypes = {
  setisMobileMenuOpened: PropTypes.func,
  isMobileMenuOpened: PropTypes.bool,
};

export default MobileMenu;
