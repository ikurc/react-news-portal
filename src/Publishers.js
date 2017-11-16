import React, { Component } from 'react';
import Publisher from "./Publisher"

class Publishers extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
          <div className="publishers">
            {this.props.papers.map((paper,i) => <Publisher key={i} paper={paper} update={this.props.update} paperName={paper.name}/>)}
          </div>
      );
    }
}

export default Publishers;
