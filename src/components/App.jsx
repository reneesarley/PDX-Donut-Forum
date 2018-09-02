import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import Forum from './Forum'; 
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Forum}/>
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;
