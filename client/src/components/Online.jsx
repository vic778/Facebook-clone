import React from "react";
import "../styles/OnlineStyle.css";

const Online = ({user}) => {
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarhProfilImgContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfilImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{user.username} </span>
      </li>
    </div>
  );
};

export default Online;
