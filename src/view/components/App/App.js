import React, { Component } from 'react'
import Header from '../Header/Header.js'
import Publishers from '../Publishers/Publishers.js'
import Subscribers from '../Subscribers/Subscribers.js'

import Actions from '../../../flux-model/Actions'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      portal: this.props.store.getPortal(),
      papers: this.props.store.getPapers(),
      users: this.props.store.getUsers(),
      news: this.props.store.getNews()
    }
  }

  updateState = () => {
    this.setState({})
  }

  componentDidMount() {
    this.props.store.on('change', this.updateState)
  }

  //
  // componentDidMount() {
  //   const portal = this.props.portal,
  //         storage = portal.storage,
  //         papers = storage.papers
  //
  //   this.subscribeOnPaper(papers) // Portal automatically subscribes itself on 3 default papers from storage`s "papers" array
  //   portal.on(this.updateState) // subscribe "updateState" method of VIEW on model changes
  // }
  //
  // componentWillUnmount() {
  //   this.props.portal.off(this.updateState) // unsubscribe "updateState" method of VIEW on model changes when componet dies
  // }
  //
  // // Controller methods
  addUser = (user) => {
    Actions.addUser(user)
  }
  //
  // deleteUser = (user) => {
  //   this.props.controller.deleteUser(user)
  // }
  //
  addNews = (news) => {
    Actions.addNews(news)
  }
  //
  // subscribe = (paper, user) => {
  //   this.props.controller.subscribe(paper,user)
  // }
  //
  // unsubscribe = (paper, user) => {
  //   this.props.controller.unsubscribe(paper, user)
  // }
  //
  // unSubscribeFromAllEvents = (user) => {
  //   this.props.controller.unSubscribeFromAllEvents(user)
  // }
  //
  // //subscribe portal on papers
  // subscribeOnPaper = (papers) => {
  //   this.props.controller.subscribeOnPaper(papers)
  // }

  render() {
    console.log(this.state)
    const portal = this.state.portal,
          portalName = portal.name

    const papers = this.state.papers
    const users = this.state.users

    const store = this.props.store

    const getPaperNews = store.getPaperNews
    const addNews = store.addNews

    return (
      <div className="App">
        <Header portalName={portalName}/>
        <div className="content">
          <Publishers
            papers={papers}
            addNews={addNews}
            getPaperNews={getPaperNews}
          />
          <Subscribers
            portal={portal}
            users={users}
            papers={papers}
            addUser={this.addUser}
            // deleteUser={this.deleteUser}
            // subscribe={this.subscribe}
            // unsubscribe={this.unsubscribe}
            // unSubscribeFromAllEvents={this.unSubscribeFromAllEvents}
           />
        </div>
      </div>
    )
  }
}

export default App
