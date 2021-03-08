import React from 'react';
import './MobileLink.css';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function MobileLink({ path, linkText, setisMobileMenuOpened }) {
  const history = useHistory();
  const location = useLocation();
  const mobileLinkSelector = location.pathname === path ? 'mobile-link_active' : '';
  function handleBtnClick(event) {
    event.stopPropagation();
    history.push(path);
    setisMobileMenuOpened(false);
  }

  return (
    <button className={`mobile-link ${mobileLinkSelector}`} onClick={handleBtnClick}>{linkText}</button>
  );
}

MobileLink.propTypes = {
  setisMobileMenuOpened: PropTypes.func,
  path: PropTypes.string,
  linkText: PropTypes.string,
};

export default MobileLink;
