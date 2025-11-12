import React from 'react';
import { Link } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <nav>
        <Link style={{font:'20px', color:'red', marginLeft:'200px', marginTop:'200px'}} to='/login'>Login</Link>
        <Link style={{font:'20px', color:'red', marginLeft:'300px', marginTop:'200px'}} to='/register'>Register</Link>
      </nav>
    </div>
  )
}

export default MainLayout