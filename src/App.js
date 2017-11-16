import React, { Component } from 'react';
import Publishers from './Publishers';
import Subscibers from './Subscibers';
import './App.css';

class App extends Component {
    constructor(props){
      super(props);
      this.state = {};
    }

    updateState = (data) => {
      this.setState(data)
    }

    сomponentDidMount() {
      // подписаться на изменения модели
    }

    componentWillUnmount() {
      // отписаться от изменений модели
    }

    // вызывать методы у контролла / пробрасывать методы

    render() {
      console.log(this.props)
      return (
          <div className="App">
            <Publishers/>
            <Subscibers/>
          </div>
      );
    }
}

export default App;
