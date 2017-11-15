import React, { Component } from 'react';
import Subscriber from "./Subscriber"
import Human from "./model/Human"


class Subscribers extends Component {
    constructor(props){
      super(props);
      this.hi = this.hi.bind(this)

      this.state = {
        users: this.props.users
      }
    }

    hi() {
      console.log(this.state)
    }

    addUser = (e) => {
      let value = e.target.value
      if (e.key === 'Enter') {
        let human = new Human(`${value}`)
        this.setState({
          users: [...this.state.users, human]
        });
      }
    }

    render() {
      return (
        <div className="Subscribers">
          <input onKeyPress={this.addUser} className="input-user" type="text"/>
          <button onClick={this.hi} className="add-user-btn">Add user</button>
          <div className="subscribers-content">
            {this.state.users.map((user,i) => <Subscriber key={i} userName={user.name}/>)}
          </div>
        </div>
      );
    }
}

export default Subscribers;
