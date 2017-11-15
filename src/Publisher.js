import React, { Component } from 'react';

class Publisher extends Component {
    constructor(props){
      super(props);
    }

    render() {
      console.log(this.props.paperName)
      return (
          <div className="Publisher">
            <span className="paper-name">{this.props.paperName}</span>
            <div className="newsArea" id="" cols="20" rows="10">News here...</div>
            <input className="paper-input" type="text"/>
            <button className="paper-btn">Send news</button>
          </div>
      );
    }
}

export default Publisher;
