import React from 'react';
// import './videoPlayer.css';
import thumbnailPlaceholder from '../../assets/images/thumbnailPlaceholder.jpg';
import PlaySvg from './../../assets/svg/playSvg.jsx';

const VideoPlayer = ({
  handleChangeInput,
  state: { rangeValue },
  currentTime,
  durationTime,
  name,
}) => {
  return (
    <div className='col-lg-5'>
      <div class='card bg-dark text-white'>
        <img
          className='icard-img '
          src={thumbnailPlaceholder}
          alt='Thumbnail'
        />
        <div className='card-img-overlay d-flex align-items-end '>
          <div className='flex-fill' >
            <input
              className='w-100 '
              type='range'
              name={name}
              onChange={handleChangeInput}
              value={rangeValue}
            />
            <div className='p-1 pt-0 fs-4 '>
              <PlaySvg className='fs-2' />
              <span className='time'>
                {currentTime.toFixed(2)} / {durationTime.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
