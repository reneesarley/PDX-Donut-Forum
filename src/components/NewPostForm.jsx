import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props){
  let _postName = null;
  let _postContent = null;

  function handleNewPostFormSubmission(event){
    event.preventDefault();
    props.onNewPostCreation({postName: _postName.value, postContent: _postContent.value, id: v4()});
    _postName.value= '';
    _postContent.value= '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input type='text' id='postName' placeholder='Name of your post' ref={(input) => {_postName = input;}}/>
        <textarea id='postContent' placeholder='Add your post content here' ref={(textarea)=>{_postContent= textarea;}}/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;
