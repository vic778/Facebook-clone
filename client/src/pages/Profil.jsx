import React from 'react';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../styles/ProfilStyle.css';

const Profil = () => {
    return (
        <div>
            <Topbar />
           <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                          <img className='profileCoverImg' src="assets/post/3.jpeg" alt="" />
                          <img className='profileUserImg' src="assets/person/vic.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Victor Barh</h4>
                            <span className='profileInfoDesc'>Hello my friend !</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                      <Feed />
                      <Rightbar profile/>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Profil;