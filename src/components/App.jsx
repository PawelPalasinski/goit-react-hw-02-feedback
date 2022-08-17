// import { FeedbackOptionsV1 } from './FeedbackOptionsV1/FeedbackOptionsV1';

// export const App = () => {
//   return (
//     <div>
//       <FeedbackOptionsV1 />
//     </div>
//   );
// };


import React, { Component } from 'react';

import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    return (Math.round((this.state.good / this.countTotalFeedback()) * 100));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClick}
          />
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />) : (
              <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
    );
  }
}