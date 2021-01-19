import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Greeting from './Greeting.jsx';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <Greeting
    firstName="Danya"
    lastName="Pryadun"
    birthDate={new Date('2000-08-21T11:32:19.566Z')}
  />,
  rootElement,
);
