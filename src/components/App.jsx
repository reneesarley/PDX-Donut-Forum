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
  }

  handleAddingNewPostToList(newPost){
    let newMasterPostList =
    this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Forum masterPostList={this.state.masterPostList}/>}/>
          <Route path ='/newPostForm' render={()=><NewPostForm onNewPostCreation={this.handleAddingNewPostToList}/>}/>
          <Route component={Error404}/>
        </Switch>
      </div>
    );
  }
}


export default App;
