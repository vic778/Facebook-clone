import React from 'react';
import { Users } from '../dummyData';
import '../styles/RightStyle.css';
import Online from './Online';

const Rightbar = ({profile}) => {

    const HomeRightbar = () => {
        return(
            <>
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
            </>
        )
    };

    const ProfilRightbar = () => {
        return(
            <>
                <h4 className='rightbarTitle'>User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInforKey">City:</span>
                        <span className="rightbarInforValue">DRCongo</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInforKey">From:</span>
                        <span className="rightbarInforValue">South-Kivu</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInforKey">Relationship:</span>
                        <span className="rightbarInforValue">Signle</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src="assets/person/1.jpeg" alt="" />
                        <span className="rightbarFollowingName">Merva</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src="assets/person/2.jpeg" alt="" />
                        <span className="rightbarFollowingName">Merva</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src="assets/person/3.jpeg" alt="" />
                        <span className="rightbarFollowingName">Merva</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src="assets/person/4.jpeg" alt="" />
                        <span className="rightbarFollowingName">Merva</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src="assets/person/5.jpeg" alt="" />
                        <span className="rightbarFollowingName">Merva</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src="assets/person/6.jpeg" alt="" />
                        <span className="rightbarFollowingName">Merva</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
           <div className="rightbarWrapper">
                {profile ? <ProfilRightbar /> : <HomeRightbar />}
           </div>
        </div>
    );
};

export default Rightbar;