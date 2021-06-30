import TwitterSvg from '../../assets/svg/twitterSvg';
import { StateContext } from '../../contexts/StateContext';
import { useContext } from 'react';
import { getMinutes } from '../../function/calcTimes';

const ShareTwitter = () => {
  const { state: { savedTime } } = useContext(StateContext);
  
  

  return (
    <div className='card mb-3 bg-primary ' style={{ maxWidth: 540 }}>
      <div className='row g-0'>
        <div className='col-md-4 d-flex align-items-center justify-content-center'>
          <TwitterSvg className='fs-5' />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title h2'>Share on Twitter</h5>
            <p className='card-text fs-5'>
              You saved <strong>{getMinutes(savedTime)}</strong> minutes time.
            </p>
            <div className='d-flex justify-content-end '>
              <a
                className='btn bg-light text-primary btn-lg '
                href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fsave-your-time-8cd68.web.app%2F&text=I%20saved%20${getMinutes(savedTime)}%20minutes%20time.`}
                target='_blank'
                rel='noreferrer'
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
