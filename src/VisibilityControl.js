import React,{Component} from "react";

export default class VisibilityControl extends Component{
    render= ()=>
    <div className="form-check">
        <input className="form-check-input"
        type="checkbox"
        //take this with caution
        checked={this.props.isChecked}
        //this with another caution
        onChange={(e)=> this.props.callback(e.target.checked)}

        />
        <label className="form-check-label">
            show {this.props.description}
        </label>
    </div>
}