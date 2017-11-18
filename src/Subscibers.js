import React, { Component } from 'react';
import Subscriber from "./Subscriber"
import Human from "./model/Human"


class Subscribers extends Component {
    constructor(props){
      super(props);
      this.state = {
        inputValue: ''
      }
    }

    clearInput = () => {
      this.setState({
        inputValue: ''
      })
    }

    handleClick = (e) => {
      let value = this.state.inputValue

      if (value) {
        let human = new Human(`${value}`)
        this.props.addUser(human);
      }
      this.clearInput()
    }

    handleEnter = (e) => {
      let value = e.target.value,
          isEnter = e.key === 'Enter'

      if (isEnter && value) {
        let human = new Human(`${value}`)
        this.props.addUser(human);
        this.clearInput()
      }
    }

    handleChange = (e) => {
      let value = e.target.value
      this.setState({
        inputValue: value
      })
    }

    render() {
      const users = this.props.users
      const papers = this.props.papers
      const portal = this.props.portal

      return (
        <div className="subscribers">
          <div className="input-wrapper">
            <input className="input-user" value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleEnter} type="text"/>
          <button className="add-user-btn" onClick={this.handleClick}>Add user</button>
          </div>

          <div className="subscribers-content">
            {users.map((user,i) => <Subscriber key={i} portal={portal} papers={papers} user={user} deleteUser={this.props.deleteUser} subscribe={this.props.subscribe} unsubscribe={this.props.unsubscribe}/>)}
          </div>

        </div>
      );
    }
}

export default Subscribers;
