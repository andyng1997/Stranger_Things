import React, { useState } from 'react';
import { registerUser } from '../api/api';
import { useNavigate, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
const Register = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate= useNavigate();
    const handleSubmit = async () => {
        const result = await registerUser(username, password);
        if (result.success) {
            setToken(result.data.token);
            window.localStorage.setItem('token', result.data.token);
            window.alert('You have successfully registered!');
            navigate('/profile');
        } else {
            window.alert('You are already registered.  Please login with your Username and Password.')
            navigate('/login');
        }
    }

    return (
        <div>
        <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }}>
            <label>Enter Username</label><br></br>
            <input
                type='text'
                onChange={(event) => setUsername(event.target.value)}
            />
            <br></br>
            <label>Enter Password</label><br></br>
            <input
                type='password'
                onChange={(event) => setPassword(event.target.value)}
            />
            <br></br>
            <button type='submit'>Submit</button>
        </form>
        <h4>Already have an account? Click the button below to login.</h4>
        <Button><Link to='/login'>Login</Link></Button>
        </div>
    )
}


export default Register;