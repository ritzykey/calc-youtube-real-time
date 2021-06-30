import React, { useContext } from 'react';
import { StateContext } from './../../contexts/StateContext';
import VideoPlayer from './VideoPlayer';
import { calcCurrentTime } from './../../function/calcTimes';

const Player = () => {
  const { state, setState } = useContext(StateContext);

  const handleRangeInput = (e) => {
    setState({
      ...state,
      rangeValue: Number(e.target.value),
      currentRealTime: calcCurrentTime(
        e.target.value,
        state.durationTime,
        state.speed
      ),
      currentTime: calcCurrentTime(e.target.value, state.durationTime),
    });
  };

  const handleRangeRealTimeInput = (e) => {
    setState({
      ...state,
      rangeValue: Number(e.target.value),
      currentRealTime: calcCurrentTime(
        e.target.value,
        state.durationTime,
        state.speed
      ),
      currentTime: calcCurrentTime(e.target.value, state.durationTime),
    });
  };

  return (
    <>
      <VideoPlayer
        name='inputName'
        rangeValue={state.rangeValue}
        currentTime={state.currentTime}
        durationTime={state.durationTime}
        handleRangeInput={handleRangeInput}
      />
      <VideoPlayer
        name='inputNameRealTime'
        rangeValue={state.rangeValue}
        currentTime={state.currentRealTime}
        durationTime={state.durationRealTime}
        handleRangeInput={handleRangeRealTimeInput}
      />
    </>
  );
};

export default Player;
