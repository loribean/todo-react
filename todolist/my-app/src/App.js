import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ToDoList from './TodoList'

function App() {






  return (
    <div className="App">
    Aurelia's To Do list
    <br/>
    <br/>
    Enter your item!
    <br/>
    When you're done, mark it off by entering the number and pressing the done button
    <ToDoList />



    </div>
  );
}

export default App;