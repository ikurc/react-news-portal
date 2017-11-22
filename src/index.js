import React from 'react'
import ReactDOM from 'react-dom'

import Portal from './model/Portal'
import Controller from './control/Controller'
import Storage from './model/Storage'
import Paper from './model/Paper'

import App from './App'

import './index.css'

// Initial papers array (some "external API")
const papers = [new Paper("The Guardian"), new Paper("The Independent"), new Paper("New York Times")]

// Data storage
const storage = new Storage(papers)

// Model
const model = new Portal("React News Portal", storage)

// Controller(model)
const controller = new Controller(model)

// View (model, control)
ReactDOM.render(<App portal={model} controller={controller}/>, document.getElementById('root'))
