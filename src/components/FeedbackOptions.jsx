import React from 'react';

import style from './FeedbackOptions.module.scss';

const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <section className="controls">
    <button type="button" onClick={onIncrementGood}>
      Good
    </button>
    <button type="button" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onIncrementBad}>
      Bad
    </button>
  </section>
);

export default FeedbackOptions;
