import { FeedbackOptionsV1 } from './FeedbackOptionsV1/FeedbackOptionsV1';

import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

// export const App = () => {
//   return (
//     <div>
//       <FeedbackOptionsV1 />
//     </div>
//   );
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>

        <Section title="Statistics"></Section>
      </>
    );
  }
}

export default App;
