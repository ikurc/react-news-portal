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
          <div className="Publisher">
            <span className="paper-name">{this.props.paperName}</span>
            <div className="newsArea" cols="20" rows="10">News here...</div>
            <input onKeyPress={this.addNews} className="paper-input" type="text"/>
            <button className="paper-btn">Send news</button>
          </div>
      );
    }
}

export default Publisher;
