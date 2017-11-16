import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Portal from './model/Portal'
// import Controlller from './model/Controlller' //реализовать
import Storage from './model/Storage'

const portal = new Portal("React Portal")
// const controller = new Controller(portal) //реализовать
const storage = new Storage(portal)

// ReactDOM.render(<App model={portal} controller={controller}/>, document.getElementById('root'));
ReactDOM.render(<App model={portal}/>, document.getElementById('root'));
