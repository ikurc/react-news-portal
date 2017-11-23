import React, { Component } from 'react'
import News from '../../../model/News'
import './Publisher.css'

class Publisher extends Component {
  constructor(props) {
    super(props)
    this.state = {inputValue: ''}
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  clearInput = () => {
    this.setState({inputValue: ''})
  }

  handleServerRequest = () => {
    let paper = this.props.paper
    paper.getFromServer().then(data => this.props.addNews(data))
  }

  handleSubmit = (e) => {
    let value = this.state.inputValue,
        paper = this.props.paper,
        isEnter = e.key === 'Enter',
        isLeftClick = e.button === 0

    if ((isLeftClick || isEnter) && value) {
      let news = new News(`${value}`, paper)

      paper.getFromInput(news)
      this.props.addNews(news)
      this.clearInput()
    }
  }

  render() {
    const paper = this.props.paper,
          paperName = paper.name,
          paperNews = this.props.getPaperNews(paperName).reverse() //correct order

    return (
      <div className="publisher">
        <span className="publisher-name">{paperName}</span>

        <div className="publisher-news-area">
          {paperNews.map((newsItem, i) => <p className="news-title" key={i}><span>{paperNews.length - i}</span>{". " + newsItem.title}</p>)}
        </div>

        <div className="publisher-input-area">
          <input className="publisher-input" placeholder="type news title..." value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleSubmit} type="text"/>
          <button className="publisher-btn publisher-send-btn" onClick={this.handleSubmit}>Send</button>
        </div>

        <button className="publisher-btn publisher-server-btn" onClick={this.handleServerRequest}>Get from server</button>
      </div>
    )
  }
}

export default Publisher
