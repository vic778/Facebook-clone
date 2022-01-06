import React from 'react';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import '../styles/Home.css';


const Home = () => {
    return (
        <div>
           <Topbar />
           <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
           </div>
          
        </div>
    );
};

export default Home;
