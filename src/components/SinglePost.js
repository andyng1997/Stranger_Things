import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage } from '../api/api';
import { useNavigate } from 'react-router-dom';


const SendMessage = ({ postID, token }) => {
    const [message, setMessage] = useState({ content: '' });
    const navigate= useNavigate();
    async function addMessage() {
        await createMessage({ postID, message, token })
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (token != ''){
            addMessage();
            console.log('message has been sent');
            window.alert('Message has been sent to user, now redirecting back to all posts.');
            setMessage({content:''})
            navigate('/posts');
            } else {
                window.confirm('Sorry you need to be logged in to send a message. Click Yes to be redirected to the login screen');
                navigate('/login')
            }
        }}>
            <input
                type='text'
                placeholder='Enter Message'
                onChange={(event) => setMessage({ content: event.target.value })}
            />
            <button type='submit'>Send Message</button>
        </form>
    )
}

const SinglePost = ({ posts, token }) => {
    const [activateMessage, setActivateMessage] = useState(false);

    const { postID } = useParams();

    const [currentPost] = posts.filter(post => post._id === postID);

    const { title, description, location, price, willDeliver, _id } = currentPost;

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <p> Description: {description}</p>
                <p> Location: {location}</p>
                <p> Price: {price}</p>
                <p> willDeliver: {willDeliver} </p>
            </div>
            <button onClick={() => setActivateMessage(!activateMessage)}>Message this user</button>
            {
                activateMessage && <SendMessage postID={postID} token={token} />
            }
        </div>
    )
}

export default SinglePost;