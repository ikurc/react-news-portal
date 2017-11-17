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
      // this.setState({
      //   news: [...this.state.news, news]
      // })
      this.props.controller.update(news);
    }
    updateState1 = () => {
      this.setState({});
    }

    componentWillMount() {
      this.props.portal.on(this.updateState1);
    }

    handleUpdate = (data) => {
      this.props.portal.trigger(data)
    }

    render() {
      console.log(this.state, '12312312');
      const name = this.props.portal.name
      const papers = this.props.portal.storage.papers;

      const news = this.props.portal.storage.news;
      console.log(news, 'news');
      return (
        <div className="App">
          <Header portalName={name}/>
          <Publishers papers={papers} update={this.updateState}/>
          {/* <Subscibers/> */}
          {news.map((item, key) => <div key={key}>{item.title}</div>)}
        </div>
      );
    }
}

export default App;
