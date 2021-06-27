import React from 'react';
import './videoPlayer.css';
import thumbnailPlaceholder from '../../assets/images/thumbnailPlaceholder.jpg';

const VideoPlayer = ({
  handleChangeInput,
  state: {  rangeValue },
  currentTime,
  durationTime,
  name,
}) => {
  return (
    <div className='videoPlayer'>
      <img src={thumbnailPlaceholder} alt='Thumbnail' />
      <div className='controller'>
        <input
          type='range'
          name={name}
          onChange={handleChangeInput}
          value={rangeValue}
        />
        <span className='playButtonIcon'>Play</span>
        <span className='time'>
          {currentTime.toFixed(2)} / {durationTime.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default VideoPlayer;
