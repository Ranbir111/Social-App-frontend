import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

function Rightbar({ profile }) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className='birthdayText'>
            <b>Arman Ansari</b> and <b>5 others</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">
          Online Friends
        </h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => {
            return <Online key={u.id} user={u} />
          })}
        </ul>
      </>
    )
  }

  const ProfileRightBar = ()=>{
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kalaiya</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kalaiya</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Friend Name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Friend Name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Friend Name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Friend Name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Friend Name</span>
          </div>
          <div className="rightbarFollowing">
            <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Friend Name</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {!profile?<HomeRightBar/>:<ProfileRightBar/>}
      </div>
    </div>
  )
}

export default Rightbar
