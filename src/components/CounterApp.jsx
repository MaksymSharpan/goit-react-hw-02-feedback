import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class CounterApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
  };

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
  };

  // выриант без return
  incrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
      // total: prevState.total + 1,
    }));
  };
  incrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
      // total: prevState.total + 1,
    }));
  };
  // вариант с return
  incrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        // total: prevState.total + 1,
      };
    });
  };

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
            onIncrementGood={this.incrementGood}
            onIncrementNeutral={this.incrementNeutral}
            onIncrementBad={this.incrementBad}
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

export default CounterApp;
