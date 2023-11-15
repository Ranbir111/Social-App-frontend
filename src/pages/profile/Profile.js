
import TopBar from '../../components/topbar/TopBar';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';
import './profile.css';

function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src="/assets/post/8.jpeg" alt="" className="profileCoverImg" />
              <img src="/assets/person/8.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>Username</h4>
              <p className='profileInfoDesc'>Hello Guy's 👋</p>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile