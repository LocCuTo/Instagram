import React from 'react';
import profile from '../assets/profile.jpg';
import Post from './Post';

const Posts = () => {
    const posts = [
        {
            id: '123',
            username: 'Joe Doe',
            profilePic: profile,
            postPhoto: profile,
            caption: 'Hello',
        },
        {
            id: '234',
            username: 'Phan Loc',
            profilePic: profile,
            postPhoto: profile,
            caption: 'Hello Hello!!!',
        },
    ];

    return (
        <div className="mt-1 mx-1">
            {posts.map((post) => (
                <Post
                    key={post.id}
                    username={post.username}
                    profilePic={post.profilePic}
                    postPhoto={post.postPhoto}
                    caption={post.caption}
                />
            ))}
        </div>
    );
};

export default Posts;
