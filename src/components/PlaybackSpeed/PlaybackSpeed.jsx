import './playbackSpeed.css';
import { calcCurrentTime } from './../../function/calcTimes';

const PlaybackSpeed = ({ setState, state }) => {
  const videoPlaybackSpeedClick = (speed) => {
    setState({
      ...state,
      speed: speed,
      durationRealTime: state.durationTime / speed,
      savedTime: state.durationTime - state.durationTime / speed,
      currentRealTime: calcCurrentTime(state.rangeValue, state.durationTime, speed)
    });
  };

  return (
    <div className= 'col' >
      <div className='h3 mt-2 text-center'>Playback Speed</div>
      <div className='container row gap-3'>
        <button className='btn btn-dark btn-youtube col' onClick={() => videoPlaybackSpeedClick(1.5)}>x1.5</button>
        <button className='btn btn-dark btn-youtube col' onClick={() => videoPlaybackSpeedClick(2)}>x2</button>
        <button className='btn btn-dark btn-youtube col' onClick={() => videoPlaybackSpeedClick(3)}>x3</button>
      </div>
    </div>
  );
};

export default PlaybackSpeed;
