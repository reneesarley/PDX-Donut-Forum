import React from 'react';
import Post from './Post';

class Forum extends React.Component{
  constructor(props){
    super(props);
    this.state={
      masterPostList: [
        {
          postName: 'My First Post',
          postContent: 'This is my first post to this forum'
        },
        {
          postName: 'I\'m posting again!',
          postContent: 'Here is my second post. I am getting really good at this.'
        }
      ]
    };
  }
  render(){
    return (
      <div>
        <h1>Portland Donut Forum</h1>
        <h3>This is the place to talk about the PDX donut scene!</h3>
        {this.state.masterPostList.map((post, index) =>
          <Post
            postName={post.postName}
            postContent={post.postContent}
            key={index}
          />
        )}
      </ div>
    );
  }
}

export default Forum;
