import './playbackSpeed.css';
import { calcCurrentRealTime } from './../../function/calcTimes';

const PlaybackSpeed = ({ setState, state }) => {
  const videoPlaybackSpeedClick = (speed) => {
    setState({
      ...state,
      speed: speed,
      durationRealTime: state.durationTime / speed,
      currentRealTime:
        state.rangeValue * (state.durationTime * calcCurrentRealTime(speed)),
      currentTime: state.rangeValue * (state.durationTime / 100),
    });
  };

  return (
    <div>
      <div className='playbackSpeedHeader'>Playback Speed</div>
      <div className='playbackSpeedButtonsGroup'>
        <button className={state.speed === 1.5 && 'active'} onClick={() => videoPlaybackSpeedClick(1.5)}>x1.5</button>
        <button className={state.speed === 2 && 'active'} onClick={() => videoPlaybackSpeedClick(2)}>x2</button>
        <button className={state.speed === 3 && 'active'} onClick={() => videoPlaybackSpeedClick(3)}>x3</button>
      </div>
    </div>
  );
};

export default PlaybackSpeed;
