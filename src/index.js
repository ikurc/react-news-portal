import React from 'react'
import ReactDOM from 'react-dom'

import Portal from './model/Portal'
import Controller from './controller/Controller'
import Storage from './model/Storage'

import Paper from './model/Paper'
// import Human from './model/Human'
// import Robot from './model/Robot'

import App from './view/components/App/App'

import './index.css'

// Initial data arrays (some "external API")
// const users = [new Human("Igor"), new Robot("Robo1")]
// const storage = new Storage(papers, users)

const papers = [new Paper("The Guardian"), new Paper("The Independent"), new Paper("The New York Times")]
const storage = new Storage(papers)
const model = new Portal("React News Portal", storage)
const controller = new Controller(model)

ReactDOM.render(<App portal={model} controller={controller}/>, document.getElementById('root'))
