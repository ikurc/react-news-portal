import React from 'react'
import ReactDOM from 'react-dom'
import store from './flux-model/Store'
import actions from './flux-model/Actions'
import App from './view/components/App/App'
import './index.css'

ReactDOM.render(<App store={store} actions={actions}/>, document.getElementById('root'))
