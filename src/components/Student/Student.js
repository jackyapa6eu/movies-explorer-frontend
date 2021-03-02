import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import './Student.css';

function Student() {
  return (
    <div className="student">
      <div className="student__description">
        <h3 className="student__name">
          Евгений
        </h3>
        <p className="student__info">
          Фронтенд-разработчик, 29 лет
        </p>
        <p className="student__about">
          Я родился и живу в Москве.
          С 6 лет за компьютером, но к вэб разработке прикаснулся только в 2014 году.
          После выполненных фриланс проектов решил, что пора узнать новое
          и расставить имеющиеся знания по местам.
          Люблю путешествовать, горы, море, красивые города и сноубординг.
        </p>
        <ul className="student__links">
          <li className="student__links-item">
            <a className="student__link" href="https://www.facebook.com/profile.php?id=100010492893966" target="_blank" rel="noreferrer">Facebook</a>
          </li >
          <li className="student__links-item">
            <a className="student__link" href="https://github.com/jackyapa6eu" target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
      <img className="student__photo" src="https://sun9-8.userapi.com/impg/c853424/v853424532/1f2500/FiI9kqhmMf4.jpg?size=1080x1920&quality=96&proxy=1&sign=b5b492c45bfa7bbf8d42c5cae284ade5&type=album" alt="Фотография студента"/>
      <Portfolio/>
  </div>
  );
}

export default Student;
