import React from 'react';
import PropTypes from 'prop-types';

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
      <button type="button" className="btn btn-default" aria-label="Left Align">
        <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
      </button>
      <p>Vote:<a onClick={handleVoteForPostClick} >up</a>    <a onClick={handleDownVoteForPostClick}>down</a></p>
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
