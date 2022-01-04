import React from 'react';
import { Users } from '../dummyData';
import '../styles/RightStyle.css';
import Online from './Online';

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
                  {Users.map((u) => (
                      <Online key={u.id} user={u} />
                  ))}
               </ul>
           </div>
        </div>
    );
};

export default Rightbar;