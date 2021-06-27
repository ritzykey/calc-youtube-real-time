export const calcCurrentTime = (rangeValue, durationTime, speed = 1) => {
  const currentTime = rangeValue * (durationTime / 100);
  return currentTime / speed;
};
