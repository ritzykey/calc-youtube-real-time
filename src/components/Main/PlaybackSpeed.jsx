import { calcCurrentTime } from '../../function/calcTimes';
import { useContext } from 'react';
import { StateContext } from '../../contexts/StateContext';

const PlaybackSpeed = () => {


  const {state, setState} = useContext(StateContext)


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
    <div className= 'col-12 col-md-7 col-lg-5' >
      <div className='h3 mt-2 text-center'>Playback Speed</div>
      <div className='container row gap-3'>
        <button className='btn btn-dark bg-youtube col' onClick={() => videoPlaybackSpeedClick(1.5)}>x1.5</button>
        <button className='btn btn-dark bg-youtube col' onClick={() => videoPlaybackSpeedClick(2)}>x2</button>
        <button className='btn btn-dark bg-youtube col' onClick={() => videoPlaybackSpeedClick(3)}>x3</button>
      </div>
    </div>
  );
};

export default PlaybackSpeed;
