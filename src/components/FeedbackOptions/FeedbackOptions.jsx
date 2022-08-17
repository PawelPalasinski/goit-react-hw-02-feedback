import React from 'react';
import PropTypes from 'prop-types';
// import styles from './FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arr = Object.keys(options);
  console.log(arr);

  return arr.map(a => {
    return (
        <button key={a} type="button" name={a} onClick={onLeaveFeedback}>
          {a}
        </button>
    );
  });
};

export default FeedbackOptions;
