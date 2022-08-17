import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section className="section-feedback">
    <h2 className="section-feedback__title">{title}</h2>
    {children}
  </section>
);

export default Section;