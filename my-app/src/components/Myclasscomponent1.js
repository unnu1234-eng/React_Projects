import React, { Component } from 'react'

export default class Myclasscomponent1 extends Component {
  render() {
    return (
      <div><center>
        <h2>My Table</h2>
      <table border="1">
        
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
          </tr>
        </tbody>
      </table>
    </center></div>
    )
  }
}