import React, { Component } from "react";
import Banner from "./TodoBanner";
import TodoCreator from "./TodoCreator";
import TodoRow from "./TodoRow";
import VisibilityControl from "./VisibilityControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Kelvin",
      todoItems: [
        { action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }
      ],
      showCompleted: true
    };
  }
  printEmpty =()=>{
    if(this.state.todoItems.filter(item=>!item.done).length === 0){
       return <tbody>You achieved all your tasks</tbody>    
    }
  }
  createNewTodo = task => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState(
        {
          todoItems: [...this.state.todoItems, { action: task, done: false }]
        },
        () => localStorage.setItem("todos", JSON.stringify(this.state))
      );
    }
  };
  //Use this to toggle your checked box
  toggleTodo = todo => {
    this.setState({
      todoItems: this.state.todoItems.map(item =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    });
    console.log(this);
  };

  //Table rows: How list was generated
  todoTableRows = doneValue =>
    this.state.todoItems
      .filter(item => item.done === doneValue)
      .map(eachItem => (
        <TodoRow
          key={eachItem.action}
          item={eachItem}
          callback={this.toggleTodo}
        />
      ));
  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null
        ? JSON.parse(data)
        : {
            userName: "Kelvin",
            todoItems: [
              { action: "Buy Flowers", done: false },
              { action: "Get Shoes", done: false },
              { action: "Collect Tickets", done: true },
              { action: "Call Joe", done: false }
            ],
            showCompleted: true
          }
    );
  };
  render = () => (
    <div>
      <Banner userName={this.state.userName} tasks={this.state.todoItems} />
      <div className="container-fluid">
        <TodoCreator callback={this.createNewTodo} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {this.todoTableRows(false)}
            { this.printEmpty() }
          </tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Achieved Tasks"
            isChecked={this.state.showCompleted}
            callback={checked =>
              this.setState({
                showCompleted: checked
              })
            }
          />
        </div>
        {this.state.showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
            </thead>
            <tbody>{this.todoTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}
