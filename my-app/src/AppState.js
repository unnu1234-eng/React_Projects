import React, { Component } from 'react'
import Propcomponent from './Mycomponents.js/Propcomponent'

export default class AppState extends Component {
    state = 
    {
        tName:"hema",
        Subject:"Full stack Development",
        Section: "Section D"
    }
  render() {
    return (
      <div>
        <Propcomponent Section = {this.state.Section}/>
        I am {this.state.tName} I study {this.state.Subject}
      </div>
    )
  }
}