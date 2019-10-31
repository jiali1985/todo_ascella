import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';


class TodoControls extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            inputName: ''
        }
    }


    updateName = (e) => {
        this.setState({
            inputName: e.target.value
        });
    }

    handleAdd = () => {
        if (this.state.inputName) {
            this.props.dispatch(addTodo({ name: this.state.inputName }));
            this.setState({ inputName: '' });
        }
    }

    render() {
        return (
            <div className="controls-container">
                <TextField
                    value={this.state.inputName}
                    onChange={this.updateName}
                    style={{ marginRight: 10 }}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleAdd}
                >
                    Add
                </Button>
            </div>
        );

    }
}

export default connect()(TodoControls);
