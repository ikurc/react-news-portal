import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Portal from './model/Portal'
import Control from './control/Control'
import Storage from './model/Storage'

// Data storage
const storage = new Storage()

// Model
const model = new Portal("React Portal", storage)

// Controller(model)
const controller = new Control(model)

// View (model, control)
ReactDOM.render(<App portal={model} controller={controller}/>, document.getElementById('root'));
