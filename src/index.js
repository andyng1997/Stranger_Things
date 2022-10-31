import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import {
    Home,
    Register,
    Login,
    Posts,
    Navbar,
    Search,
    SinglePost,
    Profile,
    EditPost,
    CreatePost,
} from './components';

import {
    getUserDetails,
    getPosts
} from './api/api';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  function logout() {
      window.localStorage.removeItem('token');
      setToken('');
      setUser({});
  }


  async function fetchPosts() {
      console.log("here");
      const results = await getPosts(token);
      setPosts(results.data.posts);
  }

  async function getMe() {
      const storedToken = window.localStorage.getItem('token');

      if (!token) {
          if (storedToken) {
              setToken(storedToken);
          }
          return;
      }

      const results = await getUserDetails(token)
      console.log(results)
      if (results.success) {
          setUser(results.data);
      } else {
          console.error(results.error.message);
      }
  }

  useEffect(() => {
    fetchPosts()
}, [token])

useEffect(() => {
    getMe();
}, [token])

 console.log(posts, "app.js posts")
  return (
      <div>
          <Navbar logout={logout} token={token} />
          <Routes>
            <Route
                    path='/'
                    element={<Home 
                    />}
                />
            <Route
                  path='/register'
                  element={<Register
                      setToken={setToken}
                      token={token}

                  />}
                />
            <Route
                  path='/login'
                  element={<Login
                      setToken={setToken}

                  />}
                />
            <Route
                    path='/profile'
                    element={<Profile 
                        user={user}
                        token={token}
                    />}
                />
            <Route
                    path='/posts'
                    element={<Posts
                        token={token}
                        posts={posts}
                        fetchPosts={fetchPosts}
                    />}
                />
            <Route
                    exact path='/posts/create-post'
                    element={<CreatePost
                        token={token}
                        setPosts={setPosts}
                        navigate={navigate}
                        
                    />}
                />
            <Route
                    path='/singlePost'
                    element={<SinglePost
                        user={user}
                        token={token}
                        posts={posts}
                    />}
                />
            <Route
                    path='/posts/:postID'
                    element={<SinglePost
                        posts={posts}
                        token={token}   
                    />}
                />
            <Route
                    exact path='/posts/edit-post/:postID'
                    element={<EditPost
                        posts={posts}
                        token={token}
                    />}
                />
            <Route
                    path='/Search'
                    element={<Search
                    posts={posts}
                    />}
                />
          </Routes>
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );