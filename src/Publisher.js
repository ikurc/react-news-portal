import React, { Component } from 'react';
import News from './model/News'
import Paper from './model/Paper'

class Publisher extends Component {
    constructor(props){
      super(props);
      this.state = {
        inputValue: ''
      }
    }

    clearInput = () => {
      this.setState({
        inputValue: ''
      })
    }

    handleServerRequest = () => {
      let paper = this.props.paper
      paper.getFromServer().then(this.props.getFromServer)
    }

    handleClick = (e) => {
      let value = this.state.inputValue
      let paper = this.props.paper

      if (value) {
        let news = new News(`${value}`, paper)

        this.props.getFromInput(news);
        this.clearInput()
      }
    }

    handleEnter = (e) => {
      let value = e.target.value,
          paper = this.props.paper,
          isEnter = e.key === 'Enter'

      if (isEnter && value) {
        let news = new News(`${value}`, paper)

        this.props.getFromInput(news);
        this.clearInput()
      }
    }

    handleChange = (e) => {
      let value = e.target.value
      this.setState({
        inputValue: value
      })
    }

    render() {
      const paperName = this.props.paper.name
      const storage = this.props.storage

      const mynews = storage.getPaperNews(paperName).reverse()
      return (
          <div className="publisher">
            <span className="publisher-name">{paperName}</span>
            <div className="publisher-news-area" cols="20" rows="10">
              {mynews.map((newsItem, i) => <p className="news-title" key={i}>{mynews.length - i + ". " + newsItem.title}</p>)}
            </div>

            <div className="publisher-input-area">
              <input className="publisher-input" placeholder="type news title..." value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleEnter} type="text"/>
            <button className="publisher-btn publisher-send-btn" onClick={this.handleClick}>Send</button>
            </div>
            <button className="publisher-btn publisher-server-btn" onClick={this.handleServerRequest}>Get from server</button>
          </div>
      );
    }
}

export default Publisher;
