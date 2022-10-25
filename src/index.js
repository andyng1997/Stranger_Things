import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Login,
  homePage
} from './components';

const App = () => {
  return <div>
    Hello World
  </div>
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);