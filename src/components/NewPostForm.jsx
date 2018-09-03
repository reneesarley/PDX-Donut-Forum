import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import App from './App';
import { v4 } from 'uuid';

class NewPostForm extends React.Component{
  constructor(props){
    super(props);
    this._postName = null;
    this._postContent = null;
    this.handleNewPostFormSubmission =
    this.handleNewPostFormSubmission.bind(this);
  }

  handleNewPostFormSubmission(event){
    event.preventDefault();
    this.props.onNewPostCreation({postName: this._postName.value, postContent: this._postContent.value, points: 0, id: v4()});
    this._postName.value= '';
    this._postContent.value= '';
    this.props.history.push('/');
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleNewPostFormSubmission}>
          <div className='form-group'>
            <label htmlFor='postName'>Name of your post</label>
            <input className='form-control' id='postName' type='text' placeholder='Name of your post' ref={(input) => {this._postName = input;}}/>
          </div>
          <div className="form-group">
            <label htmlFor='postContent'>Post</label>
            <textarea className='form-control' id='postContent' placeholder='Add your post content here' ref={(textarea)=>{this._postContent= textarea;}}/>
          </div>
          <button className='btn btn-success' type='submit'>Post</button>
        </form>
      </div>
    );
  }
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default withRouter(NewPostForm);
