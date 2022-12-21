import React from "react";

import axios from "axios";
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

import TodosList from "./TodosList";

class TodosContainer extends React.Component {
    state = {
        todos: [], 
        show: false
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then(response => this.setState({todos: response.data}))
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Header */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {/* Input - Add Item */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        {/* List */}
                        <TodosList 
                            todos = {this.state.todos} 
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodosContainer;