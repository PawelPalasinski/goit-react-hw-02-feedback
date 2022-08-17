import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
// import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
          <ul className="statistics">
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>
              Positive feedback: {positivePercentage}%
            </li>
          </ul>
  </div>
);


export default Statistics;