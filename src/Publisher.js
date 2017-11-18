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

    handleClick = (e) => {
      let value = this.state.inputValue

      if (value) {
        let news = new News(`${value}`)

        this.props.paper.getFromInput(news.title)
        this.props.update(news);
      }
      this.clearInput()
    }

    handleEnter = (e) => {
      let value = e.target.value,
          isEnter = e.key === 'Enter'

      if (isEnter && value) {
        let news = new News(`${value}`)

        this.props.paper.getFromInput(news.title)
        this.props.update(news);
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
      // const news = this.state.news.map((newsItem, i) => <p key={i}>{newsItem}</p>)
      return (
          <div className="publisher">
            <span className="publisher-name">{paperName}</span>
            <div className="publisher-news-area" cols="20" rows="10">1. New item</div>
            <div className="publisher-input-area">
              <input className="publisher-input" placeholder="type news title..." value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleEnter} type="text"/>
            <button className="publisher-btn" onClick={this.handleClick}>Send</button>
            </div>

          </div>
      );
    }
}

export default Publisher;
