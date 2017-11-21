import React, { Component } from 'react';
import Publisher from ".view/components/Publisher"
import './Publishers.css'

class Publishers extends Component {
  render() {
    const storage = this.props.storage,
          papers = storage.papers

    return (
        <div className="publishers">
          {papers.map((paper, i) => <Publisher storage={storage} key={i} paper={paper} getFromInput={this.props.getFromInput} getFromServer={this.props.getFromServer}/>)}
        </div>
    );
  }
}

export default Publishers;
