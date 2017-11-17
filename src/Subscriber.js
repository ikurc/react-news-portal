import React, { Component } from 'react';

class Subscriber extends Component {
    constructor(props){
      super(props);
    }

    subscribeTo = (paper) => {
      this.props.portal.subscribe(paper.name, this.props.user.handleUpdate)
    }

    render() {
      const userName = this.props.user.name

      return (
          <div className="subscriber">
            <span className="subscriber-name">{userName}</span>
            {/* {this.props.papers.map((paper, i) => <button onClick={this.subscribeTo(paper)} className="subscriber-btn" key={i}>{paper.name}</button>)} */}
          </div>
      );
    }
}

export default Subscriber;
