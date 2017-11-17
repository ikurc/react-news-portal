import React, { Component } from 'react';

class Subscriber extends Component {
    constructor(props){
      super(props);
    }

    subscribeTo = (paper) => {
      // this.props.portal.subscribe(paper.name, this.props.user.handleUpdate)
      this.props.update(paper.name, this.props.user.handleUpdate)
      console.log("subscribed")
    }

    render() {
      console.log(this.props)
      const userName = this.props.user.name
      const papers = this.props.papers

      return (
        <div className="subscriber">
          <span className="subscriber-name">{userName}</span>
          {papers.map((paper, i) => <button onClick={ () => this.subscribeTo(paper)} className="subscriber-btn" key={i}>{paper.name}</button>)}
        </div>
      );
    }
}

export default Subscriber;
