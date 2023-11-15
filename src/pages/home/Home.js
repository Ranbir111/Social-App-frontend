import React from 'react';
import './home.css';
import TopBar from '../../components/topbar/TopBar';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
    </>
  )
}

export default Home
