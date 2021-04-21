import React from 'react';

import style from './FeedbackOptions.module.scss';

const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <div className={style.controls}>
    <button className={style.btn} type="button" onClick={onIncrementGood}>
      Good
    </button>
    <button className={style.btn2} type="button" onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button className={style.btn3} type="button" onClick={onIncrementBad}>
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
