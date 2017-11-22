import React, { Component } from 'react'

class Subscriber extends Component {
    // Response on click and sub / unsub user
    handleSubscribe = (paper) => {
      const portal = this.props.portal,
            user = this.props.user.handleUpdate,
            status = portal.isSubscriber(paper.name, user)

      status ? this.unSubscribeFromPaper(paper, user) :
               this.subscribeOnPaper(paper, user)
    }

    // Subscribe
    subscribeOnPaper = (paper) => {
      this.props.subscribe(paper.name, this.props.user.handleUpdate)
    }

    // Unsubscribe
    unSubscribeFromPaper = (paper) => {
      this.props.unsubscribe(paper.name, this.props.user.handleUpdate)
    }

    // Delete
    deleteUser = () => {
      let user = this.props.user
      this.props.unSubscribeFromAllPapers(user.handleUpdate)
      this.props.deleteUser(user.ID)
    }

    render() {
      const portal = this.props.portal,
            papers = this.props.papers,
            user = this.props.user

      const userName = user.name,
            userNews = user.news

      // User`s subscriptions
      const subscriptions = papers.map((paper, i) => {
        let paperName = paper.name,
            status = portal.isSubscriber(paperName, user.handleUpdate)

        return <button className={status ? "subscriber-btn active" : "subscriber-btn"}
                       key={i}
                       onClick={() => this.handleSubscribe(paper)}>{paperName}</button>})

      // User`s news container
      const newsSection = userNews.map((newsitem, i) => <div className="newsItem" key={i}>{newsitem}</div>).reverse()

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
