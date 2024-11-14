import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import './music.css';

const Content = () => {
  return (
    <>
      <iframe
        className='content'
        width='560'
        height='315'
        allow='autoplay'
        title='Atletico previous sets'
        src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1877460809&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
      ></iframe>

      <LiteYouTubeEmbed
        poster='maxresdefault'
        id={'iu1gxtqugHA'}
        title='Nanji - Lobby B2B Keumzer B2B hip sync | HÖR - Apr 8 / 2022
'
      />
      <LiteYouTubeEmbed
        poster='maxresdefault'
        id={'6_hRgGQ21OI'}
        title='Nanji - Lobby B2B Keumzer B2B hip sync / October 6 / 4pm-6pm
'
      />
    </>
  );
};

export default Content;
