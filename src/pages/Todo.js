import React from 'react';
import TodoList from '../components/TodoList';
import TodoListControls from '../components/TodoListControls';


class Todo extends React.Component {

    render() {
        return (
            <div className="todo-container">
                <header className="todo-header">
                    <span className="todo-header-name">Pending Tasks</span>
                    <TodoListControls />
                </header>
                <section className="list-container">
                    <TodoList />
                </section>
            </div>
        )
    }
}

export default Todo;
