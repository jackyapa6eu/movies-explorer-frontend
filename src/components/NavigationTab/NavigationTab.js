import React from 'react';
import './NavigationTab.css';

function NavigationTab() {
  return (
    <nav className="navigation-tab">
      <ul className="navigation-tab__links">
        <li className="navigation-tab__item">
          <a className="navigation-tab__link" href="#about">
            О проекте
          </a>
        </li>
        <li className="navigation-tab__item">
          <a className="navigation-tab__link" href="#tech">
            Технологии
          </a>
        </li>
        <li className="navigation-tab__item">
          <a className="navigation-tab__link" href="#student">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationTab;
