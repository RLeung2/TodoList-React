import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    state = {
        description: "",
        assignedTo: "",
        dueDate: "",
        completed: false,

        originalDescription: this.props.todoItem.description,
        originalDueDate: this.props.todoItem.due_date,
        originalAssignedTo: this.props.todoItem.assigned_to,
        originalCompleted: this.props.todoItem.completed
    }

    const 

    onChangeDescription = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.todoItem.description = value
    }

    onChangeAssignedTo = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.todoItem.assigned_to = value
    }

    onChangeDueDate = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.todoItem.due_date = value
    }

    onChangeCompleted = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        this.props.todoItem.completed = value
        console.log(value)
    }

    cancelChange = () => {
        this.props.todoItem.description = this.state.originalDescription
        this.props.todoItem.assigned_to = this.state.originalAssignedTo
        this.props.todoItem.due_date = this.state.originalDueDate
        this.props.todoItem.completed = this.state.originalCompleted

        if (this.props.isNewItem) {
            this.props.cancelAdd()
        }

        this.props.goList()
    }

    render() {
        return (
            <div id="todo_item">
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">
                    <div id="item_description_prompt" className="item_prompt">Description:</div>
                    <input 
                        id="item_description_textfield" 
                        className="item_input" 
                        type="input"
                        defaultValue={this.props.todoItem.description}
                        name="description"
                        onChange={this.onChangeDescription} />
                    <div id="item_assigned_to_prompt" className="item_prompt">Assigned To:</div>
                    <input 
                        id="item_assigned_to_textfield" 
                        className="item_input" 
                        type="input"
                        defaultValue={this.props.todoItem.assigned_to}
                        name="assignedTo"
                        onChange={this.onChangeAssignedTo} />
                    <div id="item_due_date_prompt" className="item_prompt">Due Date:</div>
                    <input 
                        id="item_due_date_picker" 
                        className="item_input" 
                        type="date"
                        defaultValue={this.props.todoItem.due_date}
                        name="dueDate"
                        onChange={this.onChangeDueDate} />
                    <div id="item_completed_prompt" className="item_prompt">Completed:</div>
                    <input 
                        id="item_completed_checkbox" 
                        className="item_input" 
                        type="checkbox"
                        defaultValue={this.props.todoItem.completed}
                        name="completed"
                        onChange={this.onChangeCompleted} />
                </div>
                <button 
                    id="item_form_submit_button" 
                    className="item_button" 
                    onClick={this.props.submitChange.bind(this, this.props.todoItem)}>
                    Submit
                </button>
                <button 
                    id="item_form_cancel_button" 
                    className="item_button"
                    onClick={this.cancelChange}>
                    Cancel
                </button>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
