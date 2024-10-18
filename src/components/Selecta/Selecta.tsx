import { motion } from 'framer-motion';
import React, { useState } from 'react';
import vinyl from '../../assets/vinyl.png';
import './selecta.css';

interface VideoData {
  url: string;
  text: string;
  dj: string;
}

const videoData: VideoData[] = [
  {
    url: 'https://www.youtube.com/embed/mAKNeBHeOM0?si=cLHObOFWT02N9sv3',
    text: 'A groovin and dark deep house cut to nod your head and close your eyes to',
    dj: 'Hip Sync'
  },
  {
    url: 'https://www.youtube.com/embed/NMw-EiDWRTk?si=vg0i31vcNvJ0LmjB',
    text: 'Stomping house',
    dj: 'Keumzer'
  },
  {
    url: 'https://www.youtube.com/embed/Kq1BidEaoTg?si=zCx22yq9zP26Uw4i',
    text: 'Stripped deep house vibe released in 1994',
    dj: 'Lobby'
  }
  // Add more video data as needed
];

const Selecta: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<VideoData | null>(null);

  const handleRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoData.length);
    setCurrentVideo(videoData[randomIndex]);
  };

  return (
    <div id='selecta' className='selecta-container'>
      <h1>Selecta</h1>
      <button onClick={handleRandomVideo} className='random-button'>
        Atletic Dig
      </button>
      <motion.img
        src={vinyl}
        whileTap={{ rotate: '360deg' }}
        style={{ height: '150px', width: '150px', cursor: 'pointer' }}
        onClick={handleRandomVideo}
      />
      {currentVideo && (
        <div className='video-container'>
          <iframe
            className='content'
            width='560'
            height='315'
            src={currentVideo.url}
            title='Random YouTube video'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
          <div className='video-info'>
            <p className='video-text'>{currentVideo.text}</p>
            <p className='dj-name'>Selected by {currentVideo.dj}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Selecta;
