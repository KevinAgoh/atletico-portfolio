import React from 'react';
import './music.css';

const Music = () => {
  return (
    <div id='music' className='music-container'>
      <h1> Music </h1>
      <iframe
        className='content'
        width='560'
        height='315'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        title='Nanji residents sets'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1156233703&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
      ></iframe>
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          lineBreak: 'anywhere',
          wordBreak: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontFamily:
            'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
          fontWeight: 100
        }}
      ></div>
      <iframe
        className='content'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/iu1gxtqugHA?si=S0MFQsaUuk_mlzLV'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
      <iframe
        className='content'
        width='560'
        height='315'
        src='https://www.youtube.com/embed/6_hRgGQ21OI?si=dr1Rp8EUHxi-1Lxv'
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Music;
