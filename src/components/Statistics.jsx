import React from 'react';
import style from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total }) => (
  <>
    <section className={style.statistics}>
      <h2 className="statisticsTitle">Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p className="total">Total: {total} </p>
      <p className="percentage">Positive feedback: </p>
    </section>
  </>
);
export default Statistics;
