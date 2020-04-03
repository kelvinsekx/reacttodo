import React, { Component } from "react";

export default class TodoCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemText: "",
      newDescription : ""
    };
  }

  updateNewTextValue = event => {
    this.setState({
      newItemText: event.target.value
    });
  };
  updateNewDescription = event => {
    this.setState({
      newDescription: event.target.value
    });
  };

  createNewTodo = () => {
    this.props.callback(this.state.newItemText, this.state.newDescription);
    this.setState({
      newItemText: "",
      newDescription:""
    });
  };

  render = () => (
    <div className="my-1">
      <input
        className="form-control"
        placeholder="Put a title"
        value={this.state.newItemText}
        onChange={this.updateNewTextValue}
      />
      <input
        className="form-control"
        placeholder="Put a description"
        value={this.state.newDescription}
        onChange={this.updateNewDescription}
      />

      <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>
        Add
      </button>
    </div>
  );
}
