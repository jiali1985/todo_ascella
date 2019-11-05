import React from 'react';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton'
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/actions';

class TodoItem extends React.PureComponent {
    removeItem = (id, e) => {
        e.stopPropagation();
        this.props.dispatch(removeTodo({ id: id }));
    }

    toggleItem = (id, e) => {
        e.stopPropagation();
        this.props.dispatch(toggleTodo({ id: id }))
    }

    render() {
        const { item } = this.props;

        return (
            <div className="todo-item">
                <div className="todo-item-left">
                    <Checkbox
                        color="primary"
                        checked={item.checked}
                        onClick={(e) => this.toggleItem(item.id, e)}
                        aria-label={`${item.checked ? 'Completed' : 'Pending'} Task #${item.id}`}
                    />
                    <span className={`todo-item-name ${item.checked ? "todo-item-completed" : ""}`}>{item.name}</span>
                </div>
                <div>
                    <IconButton
                        aria-label={`Edit Item#${item.id}`}
                        onClick={() => this.props.handleModalOpen(item)}
                    >
                        <EditIcon />
                    </IconButton>
                    <IconButton
                        aria-label={`Remove Item#${item.id}`}
                        onClick={(e) => this.removeItem(item.id, e)}
                    >
                        <RemoveIcon />
                    </IconButton>
                </div>
                {item.notes && <div className="todo-item-notes">{item.notes}</div>}
            </div>
        );

    }
}
export default connect()(TodoItem);