import React, { Component } from 'react';
import Subscriber from "./Subscriber"
import Human from "./model/Human"
import Robot from "./model/Robot"


class Subscribers extends Component {
    constructor(props){
      super(props);
      this.state = {
        inputValue: '',
        // default human value
        selectValue: 'Human',
        types: ['Human', 'Robot']
      }
    }

    clearInput = () => {
      this.setState({inputValue: ''})
    }

    handleClick = () => {
      let inputValue = this.state.inputValue,
          selectValue = this.state.selectValue

      if (inputValue) {
        switch (selectValue) {
          case "Human":
            let human = new Human(`${inputValue}`)
            this.props.addUser(human)
            break;

          case "Robot":
            let robot = new Robot(`${inputValue}`)
            this.props.addUser(robot)
            break
          default:
            break
        }
      }
      this.clearInput()
    }

    handleEnter = (e) => {
      let inputValue = e.target.value,
          selectValue = this.state.selectValue,
          isEnter = e.key === 'Enter'

      if (isEnter && inputValue) {
        switch (selectValue) {
          case "Human":
            let human = new Human(`${inputValue}`)
            this.props.addUser(human)
            break;

          case "Robot":
            let robot = new Robot(`${inputValue}`)
            this.props.addUser(robot)
            break
          default:
            break
        }
        this.clearInput()
      }
    }

    handleInputChange = (e) => {
      let value = e.target.value
      this.setState({
        inputValue: value
      })
    }

    handleSelectChange = (e) => {
      let value = e.target.value
      this.setState({
        selectValue: value
      })
    }

    render() {
      const users = this.props.users
      const papers = this.props.papers
      const portal = this.props.portal
      const options = this.state.types

      return (
        <div className="subscribers">
          <div className="input-wrapper">
            <input className="input-user"
                   value={this.state.inputValue}
                   onChange={this.handleInputChange}
                   onKeyPress={this.handleEnter}/>

            <select className="select-type" onChange={this.handleSelectChange}>
              {options.map((type, index) => <option key={index} value={type}>{type}</option>)}
            </select>

            <button className="add-user-btn" onClick={this.handleClick}>Add user</button>
          </div>

          <div className="subscribers-content">
            {users.map((user,i) => <Subscriber key={i} portal={portal}
                                               papers={papers} user={user}
                                               deleteUser={this.props.deleteUser}
                                               subscribe={this.props.subscribe}
                                               unsubscribe={this.props.unsubscribe}
                                               unSubscribeFromAllPapers={this.props.unSubscribeFromAllPapers}
                                             />)}
          </div>

        </div>
      );
    }
}

export default Subscribers;
