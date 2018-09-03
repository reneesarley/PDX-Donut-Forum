import React from 'react';
import Header from './Header';
import NewPostForm from './NewPostForm';
import Error404 from './Error404';
import Forum from './Forum';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      masterPostList:[]
    };
    this.handleAddingNewPostToList=
    this.handleAddingNewPostToList.bind(this);

    this.handleVoteForPosts=
    this.handleVoteForPosts.bind(this);
  }

  handleAddingNewPostToList(newPost){
    let newMasterPostList =
    this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
    console.log(newPost);
  }

  handleVoteForPosts(id){
    console.log('the handleVoteForPosts function is running')
    console.log('the id is ' + id )
    let newMasterPostList = [];
    let currentMasterPostList =
    this.state.masterPostList.slice();
    for(let i=0; i< currentMasterPostList.length; i++){
      let postToCheckId = currentMasterPostList[i].id;
      if (postToCheckId == id){
        console.log("this is the current point total " + currentMasterPostList[i].points)
        let newPoints = currentMasterPostList[i].points + 1;
        currentMasterPostList[i].points = newPoints;
        console.log("the new point total is " + newPoints);
      }
        newMasterPostList.push(currentMasterPostList[i]);
        this.setState({masterPostList: newMasterPostList});
    }
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Forum masterPostList={this.state.masterPostList} onVoteForPosts={this.handleVoteForPosts}/>}/>
          <Route path ='/newPostForm' render={()=><NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}


export default App;
