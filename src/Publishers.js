import React, { Component } from 'react';
import Publisher from "./Publisher"

class Publishers extends Component {
  render() {
    const papers = this.props.papers
    return (
        <div className="publishers">
          {papers.map((paper,i) => <Publisher key={i} paper={paper} update={this.props.update} handleServer={this.props.getFromServer}/>)}
        </div>
    );
  }
}

export default Publishers;
