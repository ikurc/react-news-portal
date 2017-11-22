import React, { Component } from 'react';
import News from '../model/News'

class Publisher extends Component {
    componentWillMount = () => {
      this.setState({inputValue: ''})
    };

    clearInput = () => {
      this.setState({inputValue: ''})
    };

    handleServerRequest = () => {
        //hard code
        const requestURLArr = ['http://localhost:3001/guardian',
            'http://localhost:3001/independent',
            'http://localhost:3001/nyt'];

        const paper = this.props.paper;
        let requestURL = null;

        switch (paper.name){
            case 'The Guardian':
                requestURL = requestURLArr[0];
                break;
            case 'The Independent':
                requestURL = requestURLArr[1];
                break;
            default: requestURL = requestURLArr[2];
        }

        paper.getFromServer(requestURL, paper)
            .then(data => this.props.getFromServer(data))

    };

    handleClick = () => {
      let value = this.state.inputValue;
      let paper = this.props.paper;

      if (value) {
        let news = new News(`${value}`, paper);

        paper.getFromInput(news);
        this.props.getFromInput(news);

        this.clearInput()
      }
    };

    handleEnter = (e) => {
      let value = e.target.value,
          paper = this.props.paper,
          isEnter = e.key === 'Enter';

      if (isEnter && value) {
        let news = new News(`${value}`, paper);

        paper.getFromInput(news);
        this.props.getFromInput(news);

        this.clearInput()
      }
    };

    handleChange = (e) => {
      let value = e.target.value;
      this.setState({
        inputValue: value
      })
    };

    render() {
      const paperName = this.props.paper.name;
      const storage = this.props.storage;

      const news = storage.getPaperNews(paperName).reverse();
      return (
          <div className="publisher">
            <span className="publisher-name">{paperName}</span>
            <div className="publisher-news-area" cols="20" rows="10">
              {news.map((newsItem, i) => <p className="news-title" key={newsItem.ID}><span>{news.length - i}</span>{". " + newsItem.title}</p>)}
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
