import React from "react";

class TodosItem extends React.Component {
    
    render() {
        const { userId, id, title, completed } = this.props.todo;

        return(
            <li className="list-group-item list-group-item-action">
                <span>{title}</span>
            </li>
        );
    }
}

export default TodosItem;