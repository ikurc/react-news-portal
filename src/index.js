import React from 'react'
import ReactDOM from 'react-dom'
import Store from './flux-model/Store'
import actions from './flux-model/Actions'
import Dispatcher from './flux-model/Dispatcher'
import App from './view/components/App/App'
import './index.css'

const store = new Store()
Dispatcher.register(store.handle)

ReactDOM.render(<App store={store}/>, document.getElementById('root'))
