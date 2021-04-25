import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increase = statName => {
    this.setState(prevState => ({
      [statName]: prevState[statName] + 1,
    }));
  };
  // метод выше универсален , подходит вместо 3х функций  ниже

  // выриант без return
  // incrementGood = () => {
  //   this.setState(prevState => ({
  //     good: prevState.good + 1,
  //     // total: prevState.total + 1,
  //   }));
  // };
  // incrementNeutral = () => {
  //   this.setState(prevState => ({
  //     neutral: prevState.neutral + 1,
  //     // total: prevState.total + 1,
  //   }));
  // };
  // // вариант с return
  // incrementBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //       // total: prevState.total + 1,
  //     };
  //   });
  // };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return ((good * 100) / total).toFixed(0);
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onIncrementGood={() => this.increase('good')}
            onIncrementNeutral={() => this.increase('neutral')}
            onIncrementBad={() => this.increase('bad')}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification title="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
