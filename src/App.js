import React, { Component } from 'react';
import Header from './Header';
import Publishers from './Publishers';
import Subscibers from './Subscibers';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        portal: this.props.portal, 
        news: this.props.portal.storage.news
      }
    }

    updateState = (news) => {
      this.setState({
        news: [...this.state.news, news]
      })
    }
    // updateState = (data) => {
    //   this.setState(data)
    // }

    componentWillMount() {
      this.props.portal.on(this.updateState)
    }

    handleUpdate = (data) => {
      this.props.portal.trigger(data)
    }

    render() {
      console.log(this.state)
      const name = this.props.portal.name
      const papers = this.props.portal.storage.papers
      return (
        <div className="App">
          <Header portalName={name}/>
          <Publishers papers={papers} update={this.updateState}/>
          {/* <Subscibers/> */}
        </div>
      );
    }
}

export default App;
