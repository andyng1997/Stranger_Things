import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ logout, token }) => {

    const postsTarget = {
        pathname: "/posts",
        key: Math.random(),
        state: {
          applied: true
        }
      };

    return (
        <header>
            <nav class='ui inverted segment'>
                <nav class='ui inverted secondary menu'>
                <a class='item'><Link to='/'>Home</Link></a>
                <a class='item'><Link to={postsTarget}>Posts</Link></a>
                <a class='item'><Link to='/profile'>Profile</Link></a>
                {
                    token ? (
                        <a class='item'><Link to='/' onClick={() => logout()}>Logout</Link></a>
                        
                    ) : (
                        <>
                            <a class='item'><Link to='/register'>Register</Link></a>
                            <a class='item'><Link to='/login'>Login</Link></a>
                        </>
                    )
                }
            </nav>
            </nav>
        </header>
    )
}

export default Navbar;