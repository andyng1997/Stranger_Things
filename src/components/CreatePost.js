import React, { useState } from 'react';
import { createPost } from '../api/api';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const CreatePost = ({ token, navigate, setPosts }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    async function addPost() {

        const results = await createPost(token, { title: title, description: description, price: price, location: location, willDeliver: willDeliver })
        setPosts(previousPost=>[...previousPost, results]);
        navigate(`/posts`);

    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            addPost();
        }}>
            <label>Enter Title</label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setTitle(event.target.value)} />
            <br></br>
            <label>Enter Description </label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setDescription(event.target.value)} />
            <br></br>
            <label>Enter Price</label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setPrice(event.target.value)} />
            <br></br>
            <label>Enter Location</label>
            <br></br>
            <input
                type='text'
                onChange={(event) => setLocation(event.target.value)} />
            <br></br>
            <input type="checkbox" 
                onChange={(event) => setWillDeliver(event.target.value)} />
            <label htmlFor="willDeliver">Will Deliver?</label>
            <br></br>
            <button type='submit'>Submit New Post</button>
        </form>
    )
}


export default CreatePost;