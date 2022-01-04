import React from 'react';
import '../styles/RightStyle.css';

const Rightbar = () => {
    return (
        <div className='rightbar'>
           <div className="rightbarWrapper">
               <div className="birthdayContainer">
                   <img className='birthdayImg' src="assets/gift.png" alt="" />
                   <span className="birthdayText"><b>Victor Barh and </b><b>3 other friends</b> have a birthday tody</span>
               </div>
               <img className='rightbarAd' src="assets/ad.png" alt="" />
               <h4 className='rightbarTitle'>Online Friends</h4>
               <ul className="rightbarFriendList">
                   <li className="rightbarFriend">
                       <div className="rightbarhProfilImgContainer">
                           <img src="assets/person/vic.jpg" alt="" className="rightbarProfilImg" />
                           <span className='rightbarOnline'></span>
                       </div>
                       <span className="rightbarUserName">Victor Barh</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarhProfilImgContainer">
                           <img src="assets/person/vic.jpg" alt="" className="rightbarProfilImg" />
                           <span className='rightbarOnline'></span>
                       </div>
                       <span className="rightbarUserName">Victor Barh</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarhProfilImgContainer">
                           <img src="assets/person/vic.jpg" alt="" className="rightbarProfilImg" />
                           <span className='rightbarOnline'></span>
                       </div>
                       <span className="rightbarUserName">Victor Barh</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarhProfilImgContainer">
                           <img src="assets/person/vic.jpg" alt="" className="rightbarProfilImg" />
                           <span className='rightbarOnline'></span>
                       </div>
                       <span className="rightbarUserName">Victor Barh</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarhProfilImgContainer">
                           <img src="assets/person/vic.jpg" alt="" className="rightbarProfilImg" />
                           <span className='rightbarOnline'></span>
                       </div>
                       <span className="rightbarUserName">Victor Barh</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarhProfilImgContainer">
                           <img src="assets/person/vic.jpg" alt="" className="rightbarProfilImg" />
                           <span className='rightbarOnline'></span>
                       </div>
                       <span className="rightbarUserName">Victor Barh</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarhProfilImgContainer">
                           <img src="assets/person/vic.jpg" alt="" className="rightbarProfilImg" />
                           <span className='rightbarOnline'></span>
                       </div>
                       <span className="rightbarUserName">Victor Barh</span>
                   </li>
                   <li className="rightbarFriend">
                       <div className="rightbarhProfilImgContainer">
                           <img src="assets/person/vic.jpg" alt="" className="rightbarProfilImg" />
                           <span className='rightbarOnline'></span>
                       </div>
                       <span className="rightbarUserName">Victor Barh</span>
                   </li>
               </ul>
           </div>
        </div>
    );
};

export default Rightbar;