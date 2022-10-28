import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';
import {
    Home,
    Register,
    Login,
    Posts,
} from './components';

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  function logout() {
      window.localStorage.removeItem('token');
      setToken('');
      setUser({});
  }

  async function fetchPosts() {
      const results = await getPosts(token)
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
          console.log(results.error.message);
      }
  }

  useEffect(() => {
    fetchPosts()
}, [token])

useEffect(() => {
    getMe();
}, [token])

 
  return (
      <div>
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
                    path='/posts'
                    element={<Posts
                        token={token}
                        posts={Posts}
                        fetchPosts={fetchPosts}
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