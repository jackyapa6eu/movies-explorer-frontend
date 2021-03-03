import React from 'react';
import './Tech.css';
import techs from '../../utils/techs';

function Tech() {
  return (
    <div className="tech">
    <h3 className="tech__title">
      7 технологий
    </h3>
    <p className="tech__subtitle">
      На курсе веб-разработки мы освоили технологии, которые применили
      в дипломном проекте.
    </p>
    <ul className="tech__list">
      {techs.map((item, index) => (
          <li className="tech__item" key={index}>
            {item}
          </li>
      ))}
    </ul>
  </div>
  );
}

export default Tech;
