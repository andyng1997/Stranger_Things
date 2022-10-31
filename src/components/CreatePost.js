import React, { useState } from 'react';
import { createPost } from '../api/api';


const CreatePost = ({ token, navigate, setPosts }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    async function addPost() {

        const results = await createPost(token, { title: title, description: description, price: price, location: location, willDeliver: willDeliver })
        setPosts(previousPost=>[...previousPost, results]);
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            addPost();
            window.alert ('Post has been successfully created, now re-directing to main page.');
            navigate(`/posts`);
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
            <button type='submit'>Submit New Post</button>
        </form>
    )
}


export default CreatePost;