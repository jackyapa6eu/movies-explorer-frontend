import React from 'react';
import './Promo.css';
import NavigationTab from '../NavigationTab/NavigationTab';

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__title">
        Учебный проект студента
        факультета Веб-разработки.
      </h1>
      <NavigationTab/>
    </div>
  );
}

export default Promo;
