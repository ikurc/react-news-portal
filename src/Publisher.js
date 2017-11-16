import React, { Component } from 'react';
import News from './model/News'
import Paper from './model/Paper'

class Publisher extends Component {
    constructor(props){
      super(props);
    }

    addNews = (e) => {
      let value = e.target.value
      if (e.key === 'Enter') {
        console.log(this.props)
        let news = new News(`${value}`)
        this.props.update(news);
        this.props.paper.notifyPortals(news.title)
      }
    }

    render() {
      return (
          <div className="publisher">
            <span className="publisher-name">{this.props.paperName}</span>
            <div className="publisher-news-area" cols="20" rows="10">News here...</div>
            <input onKeyPress={this.addNews} className="publisher-input" type="text"/>
            <button className="publisher-btn">Send news</button>
          </div>
      );
    }
}

export default Publisher;
