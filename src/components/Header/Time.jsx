import React, { useEffect, useState } from 'react';

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className='display-4'>{time.toLocaleString()}</div>;
};

export default Time;
