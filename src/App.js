import './App.css';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { useState } from 'react';
import VideoDurations from './components/VideoDurations/VideoDurations';
import PlaybackSpeed from './components/PlaybackSpeed/PlaybackSpeed';
import { calcCurrentRealTime, calcCurrentTime } from './function/calcTimes';

function App() {
  const [state, setState] = useState({
    speed: 2,
    rangeValue: 100.0,
    durationTime: 10.0,
    durationRealTime: 5.0,
    currentTime: 10.0,
    currentRealTime: 5.0,
  });

  const handleChangeInput = (e) => {
    setState({
      ...state,
      rangeValue: Number(e.target.value),
      currentRealTime:
        e.target.value *
        (state.durationTime * calcCurrentRealTime(state.speed)),
      currentTime: e.target.value * (state.durationTime / 100),
    });
  };

  const handleChangeRealTimeInput = (e) => {
    console.log('realTime', e.target.value);
    setState({
      ...state,
      rangeValue: Number(e.target.value),
      currentRealTime:
        e.target.value * (state.durationTime * calcCurrentTime(2)),
      currentTime: e.target.value * (state.durationTime / 100),
    });
  };

  return (
    <div className='App'>
      <header className='App-header'>save your time</header>
      <main>
        <div className='container'>
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
        <div className='btnGroup'>
          <VideoDurations state={state} setState={setState} />
          <PlaybackSpeed state={state} setState={setState} />
        </div>
        yüzde {state.currentTime}
      </main>
    </div>
  );
}

export default App;
