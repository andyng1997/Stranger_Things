import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import {
    Home,
    Register,
    Login,

} from './components';

const App = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
 
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