import Avatar from "@mui/material/Avatar";
import React from "react";
import "./Sidebar.css";
import bg from "./assets/bg.jpg";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hashtag">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={bg} alt="bg" />
        <Avatar className="sidebar_avatar" src={user?.photoURL}>
          {user?.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statnumber">7,543</p>
        </div>
        <div className="sidebar_stat">
          <p>View on post</p>
          <p className="sidebar_statnumber ">2,448</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Programming")}
        {recentItem("Developer")}
        {recentItem("Designers")}
        {recentItem("Js")}
        {recentItem("Next.js")}
        {recentItem("Coding")}
      </div>
    </div>
  );
}
export default Sidebar;
