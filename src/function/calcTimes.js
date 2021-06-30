export const minutes = 1000 * 60;
export const hours = minutes * 60;
export const days = hours * 24;
export const years = days * 365;

export const calcCurrentTime = (rangeValue, durationTime, speed = 1) => {
  const currentTime = ((rangeValue / 1000) * durationTime) / speed;
  return currentTime;
};

export const getMinutes = (milisecond) => {
  const date = new Date(milisecond);
  return date.getMinutes();
};
export const getSecond = (milisecond) => {
  const date = new Date(milisecond);
  return date.getSeconds();
};

export const timeFormat = () => {};
