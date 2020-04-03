import React, { Component } from "react";

export default class TodoRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.action}</td>
        <td>{ (this.props.item.description) ? this.props.item.description :  "No description here"}
        </td>
        <td>
          <input
            type="checkbox"

            checked={this.props.item.done}

            onChange={() => this.props.callback(this.props.item)}
            
          />
        </td>
      </tr>
    );
  }
}
