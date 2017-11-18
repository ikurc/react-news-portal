import React, { Component } from 'react';

class Subscriber extends Component {
    constructor(props){
      super(props);
    }

    handleSubscribe = (paper) => {
      const portal = this.props.portal
      const user = this.props.user.handleUpdate

      const issub = portal.isSubscriber(paper.name, user)

      if (issub) {
        this.unSubscribeFromPaper(paper, user)
      } else {
        this.subscribeOnPaper(paper, user)
      }
    }

    subscribeOnPaper = (paper) => {
      this.props.subscribe(paper.name, this.props.user.handleUpdate)
      console.log("subscribed")
    }

    unSubscribeFromPaper = (paper) => {
      this.props.unsubscribe(paper.name, this.props.user.handleUpdate)
      console.log("unsubscribed")
    }

    deleteUser = () => {
      let user = this.props.user
      this.props.deleteUser(user.ID)
    }

    render() {
      console.log(this.props.portal)
      const userName = this.props.user.name
      const papers = this.props.papers

      return (
        <div className="subscriber">
          <span className='subscriber-close' onClick={this.deleteUser}></span>
        <span className="subscriber-name">{userName.toUpperCase()}</span>
          <div className="subscriptions">
            {papers.map((paper, i) => <button onClick={ () => this.handleSubscribe(paper)} className="subscriber-btn" key={i}>{paper.name}</button>)}
          </div>
        </div>
      );
    }
}

export default Subscriber;
