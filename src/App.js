import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Publishers from './Publishers';
import Subscibers from './Subscibers';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
    }

    updateUsers = (user) => {
      this.props.controller.updateUsers(user);
    }

    updateNews = (news) => {
      this.props.controller.updateNews(news);
    }

    subscribe = (paper, user) => {
      this.props.controller.subscribe(paper,user)
    }

    subscribeOnPaper = (papers) => {
      this.props.controller.subscribeOnPaper(papers)
    }



    updateState1 = () => {
      this.setState({});
    }

    componentWillMount() {
      const papers = this.props.portal.storage.papers
      this.subscribeOnPaper(papers)
      this.props.portal.on(this.updateState1);
    }

    render() {
      const storage = this.props.portal.storage
      const name = this.props.portal.name

      const portal = this.props.portal;
      const papers = storage.papers;
      const users = storage.users;
      const news = storage.news;



      console.log(storage)
      return (
        <div className="App">
          <Header portalName={name}/>
          <div className="content">
            <Publishers papers={papers} update={this.updateNews}/>
            <Subscibers papers={papers} portal={portal} users={users} update={this.updateUsers} updateSub={this.subscribe}/>
          </div>
          <Footer portalName={name}/>
        </div>
      );
    }
}

export default App;
