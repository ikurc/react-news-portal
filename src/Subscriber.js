import React, { Component } from 'react';

class Subscriber extends Component {
    constructor(props){
      super(props);
    }

    render() {
      return (
          <div className="Subscriber">
            <span className="user-name">{this.props.userName}</span>
          </div>
      );
    }
}

export default Subscriber;
