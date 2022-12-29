import React from "react";

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import TodosList from "./TodosList";
import TodosHeader from "./TodosHeader";
import TodosInput from "./TodosInput";

class TodosContainer extends React.Component {
    state = {
        todos: [], 
        show: false
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => this.setState({todos: response.data}))
    }

    handleChange = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            }), 
            show: !this.state.show
        })
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id
                })
            ]
        })
    }

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(), 
            title: title, 
            completed: false
        };
        this.setState({
            todos: [
                ...this.state.todos, 
                newTodo
            ]
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Header */}
                        <TodosHeader 
                            headerSpan = {this.state.show} 
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {/* Input - Add Item */}
                        <TodosInput 
                            addTodoProps = {this.addTodoItem} 
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {/* List */}
                        <TodosList 
                            todos = {this.state.todos} 
                            handleChangeProps = {this.handleChange} 
                            deleteTodoProps = {this.delTodo} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodosContainer;