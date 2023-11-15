import CloseFriend from "../closeFriend/CloseFriend";
import "./leftbar.css";
import { Bookmark, Chat, EventNote, Group, HelpOutline, PlayCircle, RssFeed, School, Work } from '@mui/icons-material';
import { Users } from "../../dummyData";

function Leftbar() {
  let num = 0;

  return (
    <div className="leftbar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Feed
            </span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Chats
            </span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Videos
            </span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Groups
            </span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Bookmarks
            </span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Questions
            </span>
          </li>
          <li className="sidebarListItem">
            <Work className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Jobs
            </span>
          </li>
          <li className="sidebarListItem">
            <EventNote className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Events
            </span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarLisItemText">
              Cources
            </span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => {
            if(num>=5){
              return null;
            }
            num+=1;
            return <CloseFriend key={u.id} user={u} />
          })}
        </ul>
      </div>
    </div>
  )
}

export default Leftbar
