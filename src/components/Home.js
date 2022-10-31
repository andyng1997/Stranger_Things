import React from "react";
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Home = () => {
    return (
        <div>
            <h1 id="header">Welcome to Stranger Things! This is your one stop shop to buy or sell all used items!</h1>
                <h3 id='register'>Don't have an account yet? You'll need one to be able to create a post!</h3>
            <Button class= "ui" id='button'>
            <Link to='/register'>Register Here</Link>
            </Button>
            </div>
            
        
        
    )
}

export default Home;
