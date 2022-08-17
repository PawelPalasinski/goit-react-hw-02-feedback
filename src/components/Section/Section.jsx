import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;