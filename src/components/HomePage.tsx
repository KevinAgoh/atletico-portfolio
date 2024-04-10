import React from 'react';

const HomePage = () => {
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
  }

  return (
    <>
      <h1>DJ Portfolio</h1>
      <div className='tabs'>
        <button className='tablinks'>Bio</button>
        <button className='tablinks'>Music</button>
        <button className='tablinks'>Dates</button>
        <button className='tablinks'>News</button>
        <button className='tablinks'>Projects</button>
      </div>
      <div id='bio' className='tabcontent'>
        <h2>Bio Section</h2>
        <p>This is the bio section for the DJ.</p>
      </div>
      <div id='music' className='tabcontent'>
        <h2>Music Section</h2>
        <p>Check out the latest music from the DJ.</p>
      </div>
      <div id='dates' className='tabcontent'>
        <h2>Dates Section</h2>
        <p>Upcoming events and tour dates.</p>
      </div>
      <div id='news' className='tabcontent'>
        <h2>News Section</h2>
        <p>Stay updated with the latest news about the DJ.</p>
      </div>
      <div id='projects' className='tabcontent'>
        <h2>Projects Section</h2>
        <p>Explore the DJ's recent projects and collaborations.</p>
      </div>
    </>
  );
};

export default HomePage;
