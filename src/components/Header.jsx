import React from 'react';
import NewPostForm from './NewPostForm';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Portland Donut Forum</h1>
      <p><Link to='/'>Home</Link> | <Link to='/newPostForm'>Add New Post</Link></p>
    </div>
  );
}

export default Header;
