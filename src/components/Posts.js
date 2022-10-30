import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api/api';
import Search from './Search';


const Posts = ({ posts, token }) => { 
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const deletePostConfirm = async (token, postIdToDelete ) => {
        window.confirm('Are you sure you want to delete this post?');
        const deleted = await deletePost(token, postIdToDelete)
        setFilteredPosts(posts);
  
    }
//ask for help updating state on post after creating post and deleting post.
    return (
        <div id="outer div element"> 
            <div>
                <h2>Items For Sale</h2>
                <Search posts= {posts} setFilteredPosts= {setFilteredPosts}></Search>
            </div>    
            { 
            Array.isArray(posts) && 
                posts.map((post) => {
                    const { description, location, price, title, _id, isAuthor } = post;
                    return (
                        <div key={_id}>
                            <h3>{title}</h3>
                            <p>Description: {description}</p>
                            <p>Price: {price}</p>
                            <p>Location: {location}</p>
                            {
                                isAuthor ? (
                                    <>
                                        <button>
                                            <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                                        </button>
                                        <button onClick={(event) => { deletePostConfirm(token, _id) }}>Delete Post
                                        </button>
                
                                    </>
                                ) : (
                                    <Link to={`/posts/${_id}`}>View Post</Link>
                                )
                            }
                        </div>
                    )
                })
                

            }
        </div>
    )
}




export default Posts;