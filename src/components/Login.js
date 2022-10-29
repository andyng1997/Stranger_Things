import React, {useState} from "react";
import {loginUser} from '../api/api';
import { useNavigate } from "react-router-dom";


const Login = ({setToken}) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const redirect= useNavigate();

const handleSubmit = async () => {

    const result = await loginUser(username, password);
 
    if (result.success) {
        setToken(result.data.token);
        window.localStorage.setItem('token', result.data.token);
        redirect('/profile');
    } else {
        window.alert("Username or Password is incorrect, please try again");
        console.error(result.error.message);
    }
}
return (
    <div>
        <h2>Welcome Stranger!</h2>
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
    </div>

)
}

export default Login;