import React from "react";
import {Link} from 'react-router-dom';
import {userLogin} from '../api';

const homePage = () => {
    return (
        <div>
            <h1>Welcome to Stranger Things! This is your one stop shop to buy or sell all used items!</h1>
            <button>
                <Link to='/login'>Login</Link>
            </button>
                <h2>Don't have an account yet?</h2>
            <button>
            <Link path='/register'>Register Here</Link>
            </button>
        </div>
    )
}

export default homePage;
