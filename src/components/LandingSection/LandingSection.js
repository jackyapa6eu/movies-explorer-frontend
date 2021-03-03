import React from 'react';
import PropTypes from 'prop-types';
import './LandingSection.css';

function LandinSection({
  id,
  title,
  children,
  type,
}) {
  const landingSectionSelector = type ? `landing-section_type_${type}` : '';
  return (
    <section className={`landing-section ${landingSectionSelector}`} id={id}>
      <h2 className="landing-section__title">
        {title}
      </h2>
      {children}
  </section>
  );
}

LandinSection.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.element,
  type: PropTypes.string,
};

export default LandinSection;
