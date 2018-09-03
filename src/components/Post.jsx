import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  function handleVoteForPostClick(){
    console.log("click event is working");
    event.preventDefault();
    props.onVoteForPosts(props.id);
  }

  return (
    <div>
      <h3>{props.postName}</h3>
      <p>{props.postContent}</p>
      <p>Current Votes: {props.points}</p>
      <button onClick={handleVoteForPostClick}>Up Vote</button>
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
