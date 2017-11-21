import React, { Component } from 'react'
import Header from './components/Header/Header.js'
import Publishers from './components/Publishers/Publishers.js'
import Subscribers from './components/Subscribers/Subscribers.js'
import './App.css'

class App extends Component {
    updateState = () => {
      this.setState({})
    }

    componentWillMount() {
      const portal = this.props.portal,
            storage = portal.storage,
            papers = storage.papers

      this.subscribeOnPaper(papers)
      portal.on(this.updateState)
    }

    addUser = (user) => {
      this.props.controller.addUser(user)
    }

    deleteUser = (user) => {
      this.props.controller.deleteUser(user)
    }

    getFromInput = (news) => {
      this.props.controller.addNews(news)
    }

    getFromServer = (news) => {
      this.props.controller.addNews(news)
    }

    subscribe = (paper, user) => {
      this.props.controller.subscribe(paper,user)
    }

    unsubscribe = (paper, user) => {
      this.props.controller.unsubscribe(paper, user)
    }

    unSubscribeFromAllPapers = (user) => {
      this.props.controller.unSubscribeFromAllPapers(user)
    }

    subscribeOnPaper = (papers) => {
      this.props.controller.subscribeOnPaper(papers)
    }

    render() {
      const portal = this.props.portal,
            storage = portal.storage,
            portalName = portal.name,
            papers = storage.papers,
            users = storage.users

      return (
        <div className="App">
          <Header portalName={portalName}/>
          <div className="content">
            <Publishers
              storage={storage}
              getFromInput={this.getFromInput}
              getFromServer={this.getFromServer}/>
            <Subscribers
              portal={portal}
              papers={papers}
              users={users}
              addUser={this.addUser}
              deleteUser={this.deleteUser}
              subscribe={this.subscribe}
              unsubscribe={this.unsubscribe}
              unSubscribeFromAllPapers={this.unSubscribeFromAllPapers}/>
          </div>
        </div>
      )
    }
}

export default App
