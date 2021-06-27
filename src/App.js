import './App.css';
import { useState } from 'react';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDurations from './components/VideoDurations/VideoDurations';
import PlaybackSpeed from './components/PlaybackSpeed/PlaybackSpeed';
import ShareTwitter from './components/ShareTwitter/ShareTwitter';
import { calcCurrentTime } from './function/calcTimes';
import '../node_modules/bootstrap/scss/bootstrap.scss';

function App() {
  const [state, setState] = useState({
    speed: 2,
    rangeValue: 100.0,
    durationTime: 10.0,
    durationRealTime: 5.0,
    currentTime: 10.0,
    currentRealTime: 5.0,
    savedTime: 5.0,
  });

  const handleChangeInput = (e) => {
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

  const handleChangeRealTimeInput = (e) => {
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
    <div className='bg-youtube vh-100 '>
      <header className='display-1 py-3 text-center text-uppercase'>
        save your time
      </header>
      <main>
        <div className='container'>
          <div className='row justify-content-center gap-4'>
            <VideoPlayer
              name='inputName'
              state={state}
              currentTime={state.currentTime}
              durationTime={state.durationTime}
              handleChangeInput={handleChangeInput}
            />
            <VideoPlayer
              name='inputNameRealTime'
              state={state}
              currentTime={state.currentRealTime}
              durationTime={state.durationRealTime}
              handleChangeInput={handleChangeRealTimeInput}
            />
          </div>
          <div className='row'>
            <VideoDurations state={state} setState={setState} />
            <PlaybackSpeed state={state} setState={setState} />
          </div>
          <div className='row justify-content-center align-items-center mt-5'>
            <ShareTwitter savedTime={state.savedTime} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
