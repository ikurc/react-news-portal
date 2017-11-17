import React, { Component } from 'react';
import Subscriber from "./Subscriber"
import Human from "./model/Human"


class Subscribers extends Component {
    constructor(props){
      super(props);
    }

    addUser = (e) => {
      let value = e.target.value
      if (e.key === 'Enter') {
        let human = new Human(`${value}`)
        this.props.update(human);
      }
    }

    render() {
      const users = this.props.users
      const papers = this.props.papers
      const portal = this.props.portal

      return (
        <div className="subscribers">
          <input onKeyPress={this.addUser} className="input-user" type="text"/>
          <button className="waves-effect waves-light btn">Add user</button>
          <div className="subscribers-content">
            {users.map((user,i) => <Subscriber update={this.props.updateSub} portal={portal} key={i} user={user} papers={papers}/>)}
          </div>

        </div>
      );
    }
}

export default Subscribers;
