import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__description">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__info">
        <p className="footer__copyright">{'\u00A9 2021'}</p>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li className="footer__links-item">
              <a href="https://praktikum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
            </li>
            <li className="footer__links-item">
              <a href="https://github.com/jackyapa6eu" className="footer__link" target="_blank" rel="noreferrer">Github</a>
            </li>
            <li className="footer__links-item">
              <a href="https://www.facebook.com/profile.php?id=100010492893966" className="footer__link" target="_blank" rel="noreferrer">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
