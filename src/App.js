import React, { Component } from 'react'
import Header from './Header'
import Publishers from './Publishers'
import Subscribers from './Subscribers'

class App extends Component {
    updateState = () => {
      this.setState({})
    }

    componentWillMount() {
      const papers = this.props.portal.storage.papers

      this.subscribeOnPaper(papers)
      this.props.portal.on(this.updateState)
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
            name = portal.name,
            papers = storage.papers,
            users = storage.users

      return (
        <div className="App">
          <Header portalName={name}/>
          <div className="content">
            <Publishers storage={storage} papers={papers} getFromInput={this.getFromInput} getFromServer={this.getFromServer}/>
            <Subscribers
               papers={papers}
               portal={portal}
               users={users}
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
