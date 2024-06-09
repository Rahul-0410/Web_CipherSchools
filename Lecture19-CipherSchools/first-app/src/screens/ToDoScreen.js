import { Component } from "react";

class ToDOScreen extends Component{
    // taskCount=0;
    state ={
        taskCount:0,
    };
    render(){
        return(
            <div className="screen">
                <h1 className="ui heading center">To Do List</h1>

            <div>
                <button onClick={(e)=>{
                    // console.log("Add task button was clicked.");
                    // this.taskCount++;
                    this.setState({...this.state,
                        taskCount: this.state.taskCount+1
                    })
                    console.log(this.state.taskCount);
                }} className="ui secondary button">Add Task</button>
            </div>

            <p>The number of task are: {this.state.taskCount}</p>
            </div>
        );
    }
}

export default ToDOScreen;