import React, { Component } from 'react';
import Todoitem from './TodoItem';

class Todos extends Component {

    render() {
        return this.props.todos.map(todo => (
            <Todoitem todo={todo} />
        ));
    }
}

export default Todos;