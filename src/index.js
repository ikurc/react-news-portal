import React from 'react'
import ReactDOM from 'react-dom'

import Portal from './model/Portal'
import Controller from './controller/Controller'
import Storage from './model/Storage'

import Store from '/flux-model/Store'
import Actions from '/flux-model/Actions'

import Paper from './model/Paper'

import App from './view/components/App/App'

import './index.css'

const papers = [new Paper("The Guardian"), new Paper("The Independent"), new Paper("The New York Times")]

// const storage = new Storage(papers)
// const model = new Portal("React News Portal", storage)
// const controller = new Controller(model)

const store = new Store()
const Actions = new Actions()

// ReactDOM.render(<App portal={model} controller={controller}/>, document.getElementById('root'))
ReactDOM.render(<App store={store} actions={actions}/>, document.getElementById('root'))
