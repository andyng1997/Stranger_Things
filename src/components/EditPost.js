import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { updatePost } from '../api/api';

const EditPost= ({ posts, token }) => {
    const { postID } = useParams();

    const [currentPost] = posts.filter(post => post._id === postID);

    const { title, description, location, price, willDeliver, } = currentPost;

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newLocation, setNewLocation] = useState(location);
    const [newPrice, setNewPrice] = useState(price);
    const [newWillDeliver, setNewWillDeliver] = useState(willDeliver);

    async function editPost() {
        const updatedPost = {
            token: token,
            title: newTitle,
            description: newDescription,
            location: newLocation,
            price: newPrice,
            willDeliver: newWillDeliver,
            _id: postID
        }
        await updatePost(updatedPost)
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            editPost();
        } }>
            <div>
                <label>New Title:</label>
                <input
                    type='text'
                    placeholder={title}
                    onChange={(event) => setNewTitle(event.target.value)} />
            </div>
            
            <div>
                <label>New Description:</label>
                <input
                    type='text'
                    placeholder={description}
                    onChange={(event) => setNewDescription(event.target.value)} />
            </div>

            <div>
                <label>New Location:</label>
                <input
                    type='text'
                    placeholder={location}
                    onChange={(event) => setNewLocation(event.target.value)} />
            </div>

            <div>
                <label>New Price:</label>
                <input
                    type='text'
                    placeholder={price}
                    onChange={(event) => setNewPrice(event.target.value)} />
            </div>

            <div>
                <label>Will deliver? Click the box for yes:</label>
                <input
                    type='checkbox'
                    checked={newWillDeliver}
                    onChange={(event) => setNewWillDeliver(event.target.checked)} />
            </div>
    
            <button type='submit'>Edit Post</button>
           
        </form>
    )
}

//I tried, I don't know why its not working.

export default EditPost;