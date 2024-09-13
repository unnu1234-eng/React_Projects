import React, { Component } from 'react'

export default class Myclasscomponent2 extends Component {
  render() {
    this.state = 
    {
        sname :"unnu"
    }
    return (
      <div>
        <centre>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/nFgsBxw-zWQ?si=pir0UJQui2plG8fq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <h1> Welcome {this.state.sname} , for react</h1>
        </centre>
      </div>
    )
  }
}
