import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Component } from 'react';

// import styles from './FeedbackOptions.module.scss';






export const FeedbackOptions = () => {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    return (
        <div className="vote-container">
            <h3 className="vote-container__title">Please leave feedback</h3>
            <button className="vote-container__grade-btn" onClick={()=> {setGood(good+1)}}>Good</button>
            <button className="vote-container__grade-btn" onClick={() => { setNeutral(neutral + 1) }}>Neutral</button>
            <button className="vote-container__grade-btn" onClick={() => { setBad(bad + 1) }}>Bad</button>
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
        </div>
    )
}
