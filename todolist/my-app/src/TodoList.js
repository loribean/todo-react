import React from 'react';
import ToDo from './toDo'
import List from './List'



class ToDoList extends React.Component {
    constructor() {
        super()
        this.state ={
            defaultValue: "",
            toDoItems:[],

        }
    }
        inputChangeHandler= (e) =>{

        this.setState({
                        defaultValue: e.target.value
                    })
    }
    onClickHandler=(event)=> {
                let input = document.getElementById("input").value
                console.log(input)
                if(input.length > 1 && input.length < 25){
                    this.setState((prevState)=>({
                toDoItems: [...prevState.toDoItems,prevState.defaultValue],
                defaultValue: "",

            }))
                } else {
                    alert("Please enter more than 1 character and less than 25")

                }}





    render(){
        return (
            <div>
                <ToDo onChange={this.inputChangeHandler} onClick ={this.onClickHandler} value={this.state.defaultValue} />
                <List listData={this.state.toDoItems}/>
            </div>

            )
    }
}

export default ToDoList;