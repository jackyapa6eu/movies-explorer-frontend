import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
  <div className="portfolio">
    <h3 className="portfolio__title">
      Портфолио
    </h3>
    <ul className="portfolio__list">
      <li className="portfolio__item">
        <h4 className="portfolio__subtitle">Статичный сайт</h4>
        <a className="portfolie__link" href="https://jackyapa6eu.github.io/how-to-learn/" target="_blank" rel="noreferrer"/>
      </li>
      <li className="portfolio__item">
        <h4 className="portfolio__subtitle">Адаптивный сайт</h4>
        <a className="portfolie__link" href="https://jackyapa6eu.github.io/russian-travel/" target="_blank" rel="noreferrer"/>
      </li>
      <li className="portfolio__item">
        <h4 className="portfolio__subtitle">Одностраничное приложение</h4>
        <a className="portfolie__link" href="https://jackyapa6eu.students.nomoredomains.monster/#/sign-in" target="_blank" rel="noreferrer"/>
      </li>
    </ul>
  </div>
  );
}

export default Portfolio;
