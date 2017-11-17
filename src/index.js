import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Portal from './model/Portal'
import Control from './control/Control'
import Storage from './model/Storage'
import Paper from './model/Paper'

const papers = [new Paper("The Guardian"), new Paper("The Independent"), new Paper("The New York Times")]

// Data storage
const storage = new Storage(papers)

// Model
const model = new Portal("React News Portal", storage)

// Controller(model)
const controller = new Control(model)

// View (model, control)
ReactDOM.render(<App portal={model} controller={controller}/>, document.getElementById('root'));
