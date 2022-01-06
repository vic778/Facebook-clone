import React from 'react';
import '../styles/FeedStyle.css';
import Post from './Post';
import { Posts } from '../dummyData';
import Share from './Share';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
};

export default Feed;