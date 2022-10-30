import React from "react";
import {Link} from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <h1>Welcome to Stranger Things! This is your one stop shop to buy or sell all used items!</h1>
            <button>
                <Link to='/login'>Login</Link>
            </button>
                <h2>Don't have an account yet? You'll need one to be able to create a post!</h2>
            <button>
            <Link to='/register'>Register Here</Link>
            </button>
        </div>
    )
}

export default Home;
