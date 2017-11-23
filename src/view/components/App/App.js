import React, { Component } from 'react'
import Header from '../Header/Header.js'
import Publishers from '../Publishers/Publishers.js'
import Subscribers from '../Subscribers/Subscribers.js'

import './App.css'

class App extends Component {
  updateState = () => {
    this.setState({})
  }

  componentDidMount() {
    const portal = this.props.portal,
          storage = portal.storage,
          papers = storage.papers

    this.subscribeOnPaper(papers) // Portal automatically subscribes itself on 3 default papers from storage`s "papers" array
    portal.on(this.updateState) // subscribe "updateState" method of VIEW on model changes
  }

  componentWillUnmount() {
    this.props.portal.off(this.updateState) // unsubscribe "updateState" method of VIEW on model changes when componet dies
  }

  // Controller methods
  addUser = (user) => {
    this.props.controller.addUser(user)
  }

  deleteUser = (user) => {
    this.props.controller.deleteUser(user)
  }

  addNews = (news) => {
    this.props.controller.addNews(news)
  }

  // getFromServer = (news) => {
  //   this.props.controller.addNews(news)
  // }

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
          portalName = portal.name,
          storage = portal.storage

    const papers = storage.papers,
          users = storage.users

    return (
      <div className="App">
        <Header portalName={portalName}/>
        <div className="content">
          <Publishers
            papers={papers}
            addNews={this.addNews}
            getPaperNews={storage.getPaperNews}
          />
          <Subscribers
            portal={portal}
            users={users}
            papers={papers}
            addUser={this.addUser}
            deleteUser={this.deleteUser}
            subscribe={this.subscribe}
            unsubscribe={this.unsubscribe}
            unSubscribeFromAllPapers={this.unSubscribeFromAllPapers}
           />
        </div>
      </div>
    )
  }
}

export default App
