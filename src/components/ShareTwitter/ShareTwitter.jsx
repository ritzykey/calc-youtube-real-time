import React from 'react';

import TwitterSvg from '../../assets/svg/twitterSvg';

const ShareTwitter = ({ savedTime }) => {
  return (
    <div class='card mb-3 bg-primary ' style={{ maxWidth: 540 }}>
      <div class='row g-0'>
        <div class='col-md-4 d-flex align-items-center justify-content-center'>
          <TwitterSvg className='fs-5' />
        </div>
        <div class='col-md-8'>
          <div class='card-body'>
            <h5 class='card-title h2'>Share on Twitter</h5>
            <p class='card-text fs-5'>
              You saved <strong>{savedTime.toFixed(2)}</strong> time.
            </p>
            <div className='d-flex justify-content-end '>
              <a
                className='btn bg-light text-primary btn-lg '
                href={`https://twitter.com/intent/tweet?url=http%3A%2F%2Flocalhost%3A3000%2F&text=I%20saved%20${savedTime.toFixed(2)}%20time.`}
                target='_blank'
                rel="noreferrer"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareTwitter;
