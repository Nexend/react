import React, { useEffect, useState } from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('LTS');

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

const Clock = ({ location, offset }) => {
  const [locationInfo, setTime] = useState({ location, time: offset });
  const { time } = locationInfo;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime({ time });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{formatDate(getTimeWithOffset(time))}</div>
    </div>
  );
};

export default Clock;
