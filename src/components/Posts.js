import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api/api';
import Search from './Search';
import { Button } from 'semantic-ui-react'

const Posts = ({ posts, token }) => { 
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const deletePostConfirm = async (token, postIdToDelete ) => {
        window.confirm('Are you sure you want to delete this post?');
        const deleted = await deletePost(token, postIdToDelete);
        window.alert('Post has been successfully deleted.');
        return deleted;
    }
//ask for help updating state on post after creating post and deleting post.
//I promise create and delete post works it just will not update the state for some reason...
    return (
        <div id="outer div element"> 
            <div>
                <h1>Items For Sale</h1>
                <Search posts= {posts} setFilteredPosts= {setFilteredPosts}></Search>
            </div>    
            { 
            Array.isArray(posts) && 
                filteredPosts.map((post) => {
                    const { description, location, price, title, _id, isAuthor } = post;
                    return (
                        <div key={_id} class="ui basic segment" id="posts">
                            <h2 class="ui header">{title}</h2>
                            <p>Description: {description}</p>
                            <p>Price: {price}</p>
                            <p>Location: {location}</p>
                            {
                                isAuthor ? (
                                    <>
                                        <Button>
                                            <Link to={`/posts/edit-post/${_id}`}>Edit</Link>
                                        </Button>
                                        <Button onClick={(event) => { deletePostConfirm(token, _id) }}>Delete Post
                                        </Button>
                
                                    </>
                                ) : (
                                    <Button>
                                    <Link to={`/posts/${_id}`}>View Post</Link>
                                    </Button>
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