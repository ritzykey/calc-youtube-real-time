import Player from './../Player/Player';
import VideoDurations from './VideoDurations';
import PlaybackSpeed from './PlaybackSpeed';
import ShareTwitter from './ShareTwitter';



const Main = () => {
  return (
    <main>
      <div className='container'>
        <div className='row justify-content-center gap-4'>
          <Player />
        </div>
        <div className='row'>
          <VideoDurations />
          <PlaybackSpeed />
        </div>
        <div className='row justify-content-center align-items-center mt-5'>
          <ShareTwitter />
        </div>
      </div>
    </main>
  );
};

export default Main;
