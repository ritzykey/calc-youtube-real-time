import './videoDurations.css';
import { calcCurrentRealTime } from './../../function/calcTimes';

const VideoDurations = ({ setState, state }) => {
  const videoDurationClick = (durationTime) => {
    setState({
      ...state,
      durationTime: durationTime,
      durationRealTime: durationTime / state.speed,
      currentRealTime:
        state.rangeValue * (durationTime * calcCurrentRealTime(state.speed)),
      currentTime: state.rangeValue * (durationTime / 100),
    });
  };

  const handleDurationInput = (e) => {
    const value = Math.abs(e.target.value);
    setState({
      ...state,
      durationTime: value,
      durationRealTime: value / state.speed,
      currentRealTime:
        state.rangeValue * (value * calcCurrentRealTime(state.speed)),
      currentTime: state.rangeValue * (value / 100),
    });
  };

  return (
    <div>
      <div className='videoDurationHeader'>Video Durations</div>
      <div className='videoDurations'>
        <button
          className={state.durationTime === 10 && 'active'}
          onClick={() => videoDurationClick(10)}
        >
          10
        </button>
        <button
          className={state.durationTime === 20 && 'active'}
          onClick={() => videoDurationClick(20)}
        >
          20
        </button>
        <button
          className={state.durationTime === 30 && 'active'}
          onClick={() => videoDurationClick(30)}
        >
          30
        </button>
        <input
          type='number'
          min='0'
          onChange={handleDurationInput}
          value={state.durationTime}
          placeHolder='duration time'
        />
      </div>
    </div>
  );
};

export default VideoDurations;
