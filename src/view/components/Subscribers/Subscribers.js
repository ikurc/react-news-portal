import React, { Component } from 'react'
import Subscriber from "../Subscriber/Subscriber.js"
import Human from "../../../model/Human"
import Robot from "../../../model/Robot"
import './Subscribers.css'

class Subscribers extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      selectValue: 'Human', // default human value
      options: ['Human', 'Robot']
    }
  }
  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  clearInput = () => {
    this.setState({inputValue: ''})
  }

  handleSelectChange = (e) => {
    this.setState({selectValue: e.target.value})
  }

  handleSubmit = (e) => {
    let inputValue = this.state.inputValue,
        selectValue = this.state.selectValue

    let isEnter = e.key === 'Enter',
        isLeftClick = e.button === 0

    if ((isLeftClick || isEnter) && inputValue) {
      switch (selectValue) {
        case "Human":
          let human = new Human(inputValue) // New Human with name inputValue
          this.props.addUser(human)
          break

        case "Robot":
          let robot = new Robot(inputValue) // New Robot with name inputValue
          this.props.addUser(robot)
          break
        default:
          break
      }
      this.clearInput()
    }
  }

  render() {
    const portal = this.props.portal,
          users = this.props.users,
          papers = this.props.papers

    const inputValue = this.state.inputValue,
          options = this.state.options

    return (
      <div className="subscribers">
        <div className="input-wrapper">
          <input className="input-user" value={inputValue} onChange={this.handleInputChange} onKeyPress={this.handleSubmit}/>

          <select className="select-type" onChange={this.handleSelectChange}>
            {options.map((type, i) => <option key={i} value={type}>{type}</option>)}
          </select>

          <button className="add-user-btn" onClick={this.handleSubmit}>Add user</button>
        </div>

        <div className="subscribers-content">
          {users.map((user,i) => {
            return (
              <Subscriber
                key={i}
                user={user}
                portal={portal}
                papers={papers}
                subscribe={this.props.subscribe}
                unsubscribe={this.props.unsubscribe}
                deleteUser={this.props.deleteUser}
                getUserNews={this.props.getUserNews}
                unSubscribeFromAllEvents={this.props.unSubscribeFromAllEvents}/>
              )
            })}
        </div>
      </div>
    )
  }
}

export default Subscribers
