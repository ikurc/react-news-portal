import React, { Component } from 'react';
import Publishers from './Publishers';
import Subscibers from './Subscibers';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        portal: this.props.portal,
        papers: this.props.papers,
        users: this.props.users
      };
    }

    render() {
      return (
          <div className="App">
            <Publishers papers={this.state.papers}/>
            <Subscibers users={this.state.users}/>
          </div>
      );
    }
}

export default App;
