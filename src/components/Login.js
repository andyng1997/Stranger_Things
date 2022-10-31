import React, {useState} from "react";
import {loginUser} from '../api/api';
import { useNavigate, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';

const Login = ({setToken}) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const redirect= useNavigate();

const handleSubmit = async () => {

    const result = await loginUser(username, password);
 
    if (result.success) {
        setToken(result.data.token);
        window.localStorage.setItem('token', result.data.token);
        window.alert('You have successfully logged in!')
        redirect('/profile');
    } else {
        window.alert("Username or Password is incorrect, please try again");
        console.error(result.error.message);
    }
}
return (
    <div>
        <h2>Welcome Stranger! Please sign in below.</h2>
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }}>
            <input
                type='text'
                placeholder='Enter Username'
                onChange={(event) => setUsername(event.target.value)} />
            <input
                type='password'
                placeholder='Enter Password'
                onChange={(event) => setPassword(event.target.value)} />
            <button type='submit'>Submit</button>
        </form>
        <div>
            <h4>Don't have an account ? Click on the register button below.</h4>
            <Button><Link to='/register'>Register</Link></Button>
        </div>
    </div>
)
}

export default Login;