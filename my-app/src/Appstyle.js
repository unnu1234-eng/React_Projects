import React, { Component } from 'react'

export default class App extends Component
{
    state = 
    {
        tname : "unnu",
        sub : "D"
    }
  render() {
    return (
      <div>
        I am {this.state.tname} sec {this.state.sub}
      </div>
    )
  }
}