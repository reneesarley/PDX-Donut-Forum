import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <h3>{props.postName}</h3>
      <p>{props.postContent}</p>
    </div>
  );
}

Post.propTypes={
  postName: PropTypes.string,
  postContent: PropTypes.string
};

export default Post;
