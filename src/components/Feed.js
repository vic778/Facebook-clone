import React from 'react';
import '../styles/FeedStyle.css';
import Post from './Post';
import Share from './Share';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default Feed;