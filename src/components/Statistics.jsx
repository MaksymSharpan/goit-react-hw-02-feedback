import React from 'react';
import style from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <>
    <div className={style.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p className="total">Total: {total} </p>
      <p className="percentage">Positive feedback: {positiveFeedback} %</p>
    </div>
  </>
);
export default Statistics;
