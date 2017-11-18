import React, { Component } from 'react';
import Header from './Header';
import Publishers from './Publishers';
import Subscibers from './Subscibers';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
    }

    addUser = (user) => {
      this.props.controller.addUser(user);
    }

    deleteUser = (user) => {
      this.props.controller.deleteUser(user);
    }

    addNews = (news) => {
      this.props.controller.addNews(news);
    }

    subscribe = (paper, user) => {
      this.props.controller.subscribe(paper,user)
    }

    unsubscribe = (paper, user) => {
      this.props.controller.unsubscribe(paper, user)
    }

    subscribeOnPaper = (papers) => {
      this.props.controller.subscribeOnPaper(papers)
    }

    getFromServer = () => {
      this.props.controller.getFromServer()
    }

    // getFromInput = (data) => {
    //   this.props.controller.getFromInput(data)
    // }

    updateState = () => {
      this.setState({});
    }

    componentWillMount() {
      const papers = this.props.portal.storage.papers

      this.subscribeOnPaper(papers)
      this.props.portal.on(this.updateState);
    }

    render() {
      const portal = this.props.portal,
            storage = portal.storage,
            name = portal.name,
            papers = storage.papers,
            users = storage.users,
            news = storage.news

      return (
        <div className="App">
          <Header portalName={name}/>
          <div className="content">
            <Publishers storage={storage} papers={papers} addNews={this.addNews} updateState={this.updateState}/>
            <Subscibers
               papers={papers}
               portal={portal}
               users={users}
               addUser={this.addUser}
               deleteUser={this.deleteUser}
               subscribe={this.subscribe}
               unsubscribe={this.unsubscribe}/>
          </div>
        </div>
      );
    }
}

export default App;
