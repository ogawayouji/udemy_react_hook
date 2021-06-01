import React, { Component } from 'react'
// rce
class Counter extends Component {
  // rconst
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCount}>カウント + </button>
      </div>
    )
  }
}

export default Counter
