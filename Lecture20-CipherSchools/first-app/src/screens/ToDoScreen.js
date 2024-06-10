// import { Component } from "react";

//using hook
import {useState} from "react"
import Task from "../components/Task";

// class ToDOScreen extends Component{
//     // taskCount=0;
//     state ={
//         taskCount:0,
//     };
//     render(){
//         return(
//             <div className="screen">
//                 <h1 className="ui heading center">To Do List</h1>

//             <div>
//                 <button onClick={(e)=>{
//                     // console.log("Add task button was clicked.");
//                     // this.taskCount++;
//                     this.setState({...this.state,
//                         taskCount: this.state.taskCount+1
//                     })
//                     console.log(this.state.taskCount);
//                 }} className="ui secondary button">Add Task</button>
//             </div>

//             <p>The number of task are: {this.state.taskCount}</p>
//             </div>
//         );
//     }
// }


// const ToDoScreen=()=>{
//     const [taskCount, setTaskCount]= useState(0);
//     return(
//                     <div className="screen">
//                         <h1 className="ui heading center">To Do List</h1>
        
//                     <div>
//                         <button onClick={(e)=>{
//                             setTaskCount(taskCount+1)
//                         }} className="ui secondary button">Add Task</button>
//                     </div>
        
//                     <p>The number of task are: {taskCount}</p>
//                     </div>
//                 );
// }


const ToDoScreen=()=>{
    const [taskList, setTaskList]= useState([]);
    return(
                    <div className="screen">
                        <h1 className="ui heading center">To Do List</h1>
        
                    <div>
                        <button onClick={(e)=>{
                            setTaskList([...taskList,{
                                title:"Go to gym",
                                description:"Going to gym is good for muscle growth"
                            }])
                        }} className="ui secondary button">Add Task</button>
                    {/* <p>The number of task are: {taskList.length}</p> */}
                    {taskList.map((task)=> <Task/>)}
                    </div>
                    </div>
                );
}

export default ToDoScreen;