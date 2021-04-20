import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class CounterApp extends React.Component {
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
    // total: PropTypes.number,
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
    // return this.state.good + this.state.neutral;
  };
  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <>
        <FeedbackOptions
          onIncrementGood={this.incrementGood}
          onIncrementNeutral={this.incrementNeutral}
          onIncrementBad={this.incrementBad}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          // total={this.countTotalFeedback}
        />
      </>
    );
  }
}

export default CounterApp;
