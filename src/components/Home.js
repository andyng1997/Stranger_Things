import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import {userLogin} from '../api';

const homePage = () => {
    return (
        <div>
            <h1>Welcome to Stranger Things! This is your one stop shop to buy or sell all used items!</h1>
            <BrowserRouter>
            <button>
                <Route path='/login'>Login</Route>
            </button>
            </BrowserRouter>
                <h2>Don't have an account yet?</h2>
            <BrowserRouter>
            <button>
            <Route path='/register'>Register Here</Route>
            </button>
            </BrowserRouter>
        </div>
    )
}
 console.log('testing changes');
export default homePage;
