import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);
    setShowControls(false);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <div className='app__video' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
        onPlay={() => setShowControls(false)}
        onPause={() => setShowControls(true)}
      />
      {showControls && (
        <div className='app__video-overlay flex__center'>
          <div className='app__video-overlay_circle flex__center' onClick={handleVideo}>
            {playVideo ? (
              <BsPauseFill color='#fff' fontSize={30} />
            ) : (
              <BsFillPlayFill color='#fff' fontSize={30} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
