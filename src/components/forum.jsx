import React from 'react';
import Post from './Post';

const posts = [
  {
    postName: 'My First Post',
    postContent: 'This is my first post to this forum'
  },
  {
    postName: 'I\'m posting again!',
    postContent: 'Here is my second post. I am getting really good at this.'
  }
];

function Forum(){
  return (
    <div>
      <h1>Portland Donut Forum</h1>
      <h3>This is the place to talk about the PDX donut scene!</h3>
      {posts.map((post, index) =>
        <Post
          postName={post.postName}
          postContent={post.postContent}
          key={index}
        />
      )}

    </ div>
  );
}

export default Forum;
