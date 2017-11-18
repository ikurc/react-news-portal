import React, { Component } from 'react';
import Publisher from "./Publisher"

class Publishers extends Component {
  render() {
    const papers = this.props.papers
    return (
        <div className="publishers">
          {papers.map((paper,i) => <Publisher storage={this.props.storage} key={i} paper={paper} addNews={this.props.addNews} updateState={this.props.updateState}/>)}
        </div>
    );
  }
}

export default Publishers;
