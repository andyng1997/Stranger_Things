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
            <nav>
                <Link to='/'>Home</Link>
                <Link to={postsTarget}>Posts</Link>
                <Link to='/profile'>Profile</Link>
                {/* <Link to='/create-post'>Create Post</Link> */}
                {/* <Link to='/edit-post'>Edit Post</Link> */}
                {/* <Link to='/single-post-view'>Single Post View</Link> */}
                {
                    token ? (
                        <Link to='/' onClick={() => logout()}>Logout</Link>
                        
                    ) : (
                        <>
                            {/* <Link to='/register'>Register</Link> */}
                            <Link to='/login'>Login</Link>
                        </>
                    )
                }
            </nav>
        </header>
    )
}

export default Navbar;