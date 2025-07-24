import React, { Component } from 'react';
import './style.css';

export class Counter extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = { count: 0 }

    this.increaseCounter1 = this.increaseCounter1.bind(this);
  }

  increaseCounter1 = function(_e)
  {
    this.setState({ count: this.state.count + 2 })
  }

  increaseCounter2 = _e => {
    this.setState({ count: this.state.count + 1 })
  }

  resetCounter = () => this.setState({ count: 0 })


  componentDidMount(){
    console.log("componentDidMount -> ",this.state.count);
  }
  componentDidUpdate(){
    console.log("componentDidUpdate -> ",this.state.count);
  }
  componentWillUnmount(){
    console.log("componentWillUnmount -> ",this.state.count);
  }

  render()
  {
    return (
      <div className="counter__container">
        <div className="counter__header">
          <p>You clicked {this.state.count} times</p>
        </div>
        <div className="counter__main">
          <button onClick={this.increaseCounter1}>Increase counter with arrow function</button>
          <button onClick={this.increaseCounter2}>Increase counter with bind</button>
          <button onClick={this.resetCounter}>Reset counter</button>
        </div>
      </div>
    );
  }
}

