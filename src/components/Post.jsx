import React from 'react';
import PropTypes from 'prop-types';

let vote = 0;

function Post(props){
  function handleVoteForPostClick(){
    event.preventDefault();
    props.onVoteForPosts(1, props.id);
  }
  function handleDownVoteForPostClick(){
    event.preventDefault();
    props.onVoteForPosts(-1, props.id);
  }

  return (
    <div>
      <h3>{props.postName}</h3>
      <p>{props.postContent}</p>
      <p>Current Votes: {props.points}</p>
      <button onClick={handleVoteForPostClick} >Up Vote</button>    <button onClick={handleDownVoteForPostClick}>Down Vote</button>
    </div>
  );
}

Post.propTypes={
  postName: PropTypes.string,
  postContent: PropTypes.string,
  points: PropTypes.number,
  id: PropTypes.string,
  onVoteForPosts: PropTypes.func
};

export default Post;
