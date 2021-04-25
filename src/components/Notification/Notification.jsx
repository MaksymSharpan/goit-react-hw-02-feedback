import React from 'react';
import style from './Notification.module.scss';

const Notification = ({ title }) => {
  return (
    <div className={style.notification}>
      <p>{title}</p>
    </div>
  );
};

export default Notification;
