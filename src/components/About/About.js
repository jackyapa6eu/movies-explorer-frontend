import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <article className="about__article">
        <h3 className="about__subtitle">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </article>
      <article className="about__article">
        <h3 className="about__subtitle">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about__description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </article>
      <div className="about__timeframes">
        <div className="about__timeframe about__timeframe_duration_one">
          <p className="about__duration about__duration_contrast">
            1 неделя
          </p>
          <p className="about__duration-description">
            Back-end
          </p>
        </div>
        <div className="about__timeframe about__timeframe_duration_four">
          <p className="about__duration">
            4 недели
          </p>
          <p className="about__duration-description">
            Front-end
          </p>
        </div>
      </div>
  </div>
  );
}

export default About;
