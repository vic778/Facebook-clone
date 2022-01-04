import { Chat, Notifications, Person, Search } from '@material-ui/icons';
import React from 'react';
import '../styles/TopbarStyle.css'

const Topbar = () => {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className="logo">Facebook</span>
            </div>
            <div className='topbarCenter'>
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input placeholder='search for friend, post or video' className="searchInput" />
                </div>
            </div>
            <div className='topbarRight'>
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/vic.jpg" alt="" className="topbarImg" />
            </div> 
            
        </div>
    );
};

export default Topbar;