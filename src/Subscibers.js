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

      return (
        <div className="subscribers">
          <input onKeyPress={this.addUser} className="input-user" type="text"/>
          <button className="add-subscriber-btn">Add user</button>
          <div className="subscribers-content">
            {users.map((user,i) => <Subscriber key={i} user={user}/>)}
          </div>

        </div>
      );
    }
}

export default Subscribers;
