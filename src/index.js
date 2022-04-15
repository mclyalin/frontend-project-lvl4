// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import ReactDOM from 'react-dom';

import init from './init.jsx';

import '../assets/application.scss';

const runApp = () => {
  if (process.env.NODE_ENV !== 'production') {
    localStorage.debug = 'chat:*';
  }

  const root = document.querySelector('#chat');
  const vdom = init();
  ReactDOM.render(vdom, root);

  console.log('it works!');
};

runApp();
