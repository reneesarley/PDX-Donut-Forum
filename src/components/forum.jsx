import React from 'react';
import Post from './Post';

function Forum(props){
  return (
    <div>
      {props.masterPostList.map((post) =>
        <Post
          postName={post.postName}
          postContent={post.postContent}
          points={post.points}
          key={post.id}
          id={post.id}
          onVoteForPosts={props.onVoteForPosts}
        />
      )}
    </ div>
  );
  Forum.propTypes ={
    masterPostList: PropTypes.array,
    onVoteForPosts: PropTypes.func
  }
}

export default Forum;
