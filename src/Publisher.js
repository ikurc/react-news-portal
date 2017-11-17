import React, { Component } from 'react';
import News from './model/News'
import Paper from './model/Paper'

class Publisher extends Component {
    constructor(props){
      super(props);
      this.state = {
        news: []
      }
    }

    addNews = (e) => {
      let value = e.target.value
      if (e.key === 'Enter') {
        let news = new News(`${value}`)
        this.setState({
          news: [...this.state.news, value]
        })
        this.props.update(news);
      }
    }

    render() {
      const paperName = this.props.paper.name
      const news = this.state.news.map((newsItem, i) => <p key={i}>{newsItem}</p>)
      return (
          <div className="publisher">
            <span className="publisher-name">{paperName}</span>
            <div className="publisher-news-area" cols="20" rows="10">{news}</div>
            <input className="publisher-input" onKeyPress={this.addNews} type="text"/>
            {/* <button className="publisher-btn">Send news</button> */}
          </div>
      );
    }
}

export default Publisher;
