import React,{Component} from "react"

class Banner extends Component{
    render(){
        return(
            <h4 className="bg-primary text-white text-center p-2">
                {this.props.userName}'s To Do List ({(this.props.tasks.filter(item=>!item.done)).length} Items to do.)
            </h4>
        )
    }
}

export default Banner;