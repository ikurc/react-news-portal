import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.css'

import Portal from './js/model/Portal'
import Controller from './js/control/Controller'
import Storage from './js/model/Storage'
import Paper from './js/model/Paper'

import App from './js/components/App'

// Data storage
const storage = new Storage(new Paper("The Guardian"), new Paper("The Independent"), new Paper("New York Times"));

// Model
const model = new Portal("React News Portal", storage);

// Controller(model)
const controller = new Controller(model);

// View (model, control)
ReactDOM.render(<App portal={model} controller={controller}/>, document.getElementById('root'));
