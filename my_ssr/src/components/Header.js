import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to={'/'}>首页</Link><br/>
      <Link to={'/login'}>登陆</Link><br/>
      <Link to={'/404'}>找不到</Link><br/>
    </div>
  )
}

export default Header;