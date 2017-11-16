import React, { Component } from 'react';
import Publishers from './Publishers';
import Subscibers from './Subscibers';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        "portal": this.props.portal,
        "papers": this.props.papers,
        "users": this.props.users,
        "news": this.props.news
      };
    }

    updateUsersState = (user) => {
      this.setState( {"users": [...this.state.users, user]} )
    }

    updateNewsState = (newsItem) => {
      this.setState( {"news": [...this.state.news, newsItem]} )
    }

    render() {
      console.log(this.state)
      return (
          <div className="App">
            <Publishers update={this.updateNewsState} papers={this.state.papers}/>
            <Subscibers portal={this.state.portal} papers={this.state.papers} update={this.updateUsersState} users={this.state.users}/>
          </div>
      );
    }
}

export default App;
