import React, { Component } from 'react'

class Subscriber extends Component {
    // Set state for each paper (isSubscribed on current paper) "false" by default
    componentWillMount() {
      const portal = this.props.portal,
            papers = this.props.papers,
            user = this.props.user.handleUpdate

      papers.forEach(paper => {
        let isSubscriber = portal.isSubscriber(paper.name, user)
        this.setState({[paper.name]: isSubscriber})
      })
    }

    // Toggle status of paper (true / false)
    toggleState = (key) => {
      this.setState({
        [key]: !this.state[key]
      })
    }

    // Response on click and sub / unsub user
    handleSubscribe = (paper) => {
      const portal = this.props.portal,
            user = this.props.user.handleUpdate,
            isSubscriber = portal.isSubscriber(paper.name, user)

      isSubscriber ? this.unSubscribeFromPaper(paper, user) :
                     this.subscribeOnPaper(paper, user)
    }

    // Subscribe
    subscribeOnPaper = (paper) => {
      this.props.subscribe(paper.name, this.props.user.handleUpdate)
      this.toggleState(paper.name)
    }

    // Unsubscribe
    unSubscribeFromPaper = (paper) => {
      this.props.unsubscribe(paper.name, this.props.user.handleUpdate)
      this.toggleState(paper.name)
    }

    // Delete
    deleteUser = () => {
      let user = this.props.user
      this.props.unSubscribeFromAllPapers(user.handleUpdate)
      this.props.deleteUser(user.ID)
    }

    render() {
      const papers = this.props.papers,
            userName = this.props.user.name.toUpperCase(),
            news = this.props.user.news

      const subscriptions = papers.map((paper, i) => {
        return <button
                className={this.state[paper.name] ? 'subscriber-btn active' : 'subscriber-btn' }
                key={i}
                onClick={() => this.handleSubscribe(paper)}>{paper.name}</button>})

      const newsSection = news.map((newsitem, i) => <div className="newsItem" key={i}>{newsitem}</div>).reverse()

      return (
        <div className="subscriber">
          <span className='subscriber-close' onClick={this.deleteUser}></span>
          <span className="subscriber-name">{userName}</span>

          <div className="subscriptions-wrapper">
            <div className="subscriptions">{subscriptions}</div>
            <div className="news-section">{newsSection}</div>
          </div>
        </div>
      )
    }
}

export default Subscriber
