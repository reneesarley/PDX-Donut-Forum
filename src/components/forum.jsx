import React from 'react';
import Post from './Post';

function Forum(props){
  return (
    <div>
      {props.masterPostList.map((post) =>
        <Post
          postName={post.postName}
          postContent={post.postContent}
          key={post.id}
        />
      )}
    </ div>
  );
  Forum.propTypes ={
    masterPostList: PropTypes.array
  }
}

export default Forum;
