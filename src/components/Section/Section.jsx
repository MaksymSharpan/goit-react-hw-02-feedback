import React from 'react';

import style from './Section.module.scss';

const Section = ({ title, children }) => {
  return (
    <div className={style.sectionContainer}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
